// app/api/alias-votes/route.ts
import { NextRequest } from 'next/server'
import { supabase } from '@/lib/supabase/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const locationId = searchParams.get('location_id')

    if (!locationId) {
      return Response.json({ error: 'Location ID required' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('alias_votes')
      .select(`
        *,
        locations (name)
      `)
      .eq('location_id', locationId)

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { location_id, user_id, alias } = body

    // Check if user already voted for this alias
    const { data: existingVote } = await supabase
      .from('alias_votes')
      .select('*')
      .eq('location_id', location_id)
      .eq('user_id', user_id)
      .eq('alias', alias)
      .single()

    if (existingVote) {
      return Response.json({ error: 'User already voted for this alias' }, { status: 400 })
    }

    // Create new vote
    const { data, error } = await supabase
      .from('alias_votes')
      .insert([{ location_id, user_id, alias }])
      .select()
      .single()

    if (error) {
      return Response.json({ error: error.message }, { status: 500 })
    }

    // Update location with most voted alias
    const { error: updateError } = await supabase.rpc('update_location_alias', {
      location_id_param: location_id
    })

    if (updateError) {
      console.error('Alias update error:', updateError)
    }

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}