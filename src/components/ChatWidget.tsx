import { useEffect } from 'react';

export function ChatWidget() {
  useEffect(() => {
    const widgetId = "6999564395fbc5190c8918db";
    if (document.querySelector(`script[data-widget-id="${widgetId}"]`)) {
      return;
    }

    const script = document.createElement('script');
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
    script.dataset.widgetId = widgetId;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return null;
}
