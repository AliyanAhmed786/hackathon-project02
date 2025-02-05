// app/api/auth/logout/route.ts
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const cookieStore = cookies()

  try {
    // Clear the login cookie
    cookieStore.set('IsLogin', '0', {
      httpOnly: true,
      expires: new Date(0), // Expire the cookie immediately
    })

    return NextResponse.json('Logout Successful!', { status: 200 })
  } catch (error) {
    return NextResponse.json({ error: 'Logout Failed' }, { status: 500 })
  }
}
