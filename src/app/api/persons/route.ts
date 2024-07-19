// import {} from 'next'

export async function GET(request: Request) {
  try {
    // 何かする,
    const persons: Record<string, string>[] = [
      { personName: 'Hello3', personCode: 'HELLO3' },
      { personName: 'Hello4', personCode: 'HELLO4' }
    ]

    return await new Response(JSON.stringify(persons), { status: 200 })
  } catch (error) {
    console.error(error)
    return await new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    // 何かする

    return await new Response(JSON.stringify({ message: 'OK' }), { status: 200 })
  } catch (error) {
    console.error(error)
    return await new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}

export async function PATCH(request: Request) {
  try {
    // 何かする

    return await new Response(JSON.stringify({ message: 'OK' }), { status: 200 })
  } catch (error) {
    console.error(error)
    return await new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    // 何かする

    return await new Response(JSON.stringify({ message: 'OK' }), { status: 200 })
  } catch (error) {
    console.error(error)
    return await new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 })
  }
}
