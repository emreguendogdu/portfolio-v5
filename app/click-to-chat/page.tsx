import { constructMetadata } from '@/lib/siteConfig';
import ClickToChat from './components/ClickToChat';

export const metadata = constructMetadata({
  title: 'Click to Chat',
  description:
    'Start a WhatsApp conversation with any number without saving the contact.',
});

export default function Page() {
  return <ClickToChat />;
}
