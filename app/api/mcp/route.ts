import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { method, params, id } = body;

  if (method === 'tools/list') {
    return NextResponse.json({
      jsonrpc: '2.0',
      id,
      result: {
        tools: [
          {
            name: 'get_blog_posts',
            description: 'Get a list of all blog posts with their slugs and excerpts.',
            inputSchema: {
              type: 'object',
              properties: {}
            }
          },
          {
            name: 'get_service_details',
            description: 'Get details about a specific service (Design, Development, Strategy).',
            inputSchema: {
              type: 'object',
              properties: {
                service: { type: 'string', enum: ['design', 'development', 'strategy'] }
              },
              required: ['service']
            }
          }
        ]
      }
    });
  }

  return NextResponse.json({
    jsonrpc: '2.0',
    id,
    error: {
      code: -32601,
      message: 'Method not found'
    }
  }, { status: 404 });
}

export async function GET() {
  return new NextResponse('Spark Studios MCP Server. Use POST for JSON-RPC requests.', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' }
  });
}
