import { useEffect } from 'react';

export function ChatWidget() {
  useEffect(() => {
    const widgetId = "699a59986e60094228983c10";
    if (document.querySelector(`script[data-widget-id="${widgetId}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = "https://beta.leadconnectorhq.com/loader.js";
    script.dataset.resourcesUrl = "https://beta.leadconnectorhq.com/chat-widget/loader.js";
    script.dataset.widgetId = widgetId;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
