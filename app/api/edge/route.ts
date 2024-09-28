export const runtime = 'edge'

export async function GET() {
    return new Response('Draft mode is enabled')
}