import { ReviewResponderBody } from '@/types/types';
import { OpenAIStream } from '@/utils/reviewResponderStream';

export const config = {
  runtime: 'experimental-edge',
};

const handler = async (req: Request): Promise<Response> => {
  try {
    const { review, name, model, apiKey } =
      (await req.json()) as ReviewResponderBody;

    let apiKeyFinal;
    if (apiKey) {
      apiKeyFinal = apiKey;
    } else {
      apiKeyFinal = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    }

    const stream = await OpenAIStream(review, name, model, apiKeyFinal);

    return new Response(stream);
  } catch (error) {
    console.error(error);
    return new Response('Error', { status: 500 });
  }
};

export default handler;
