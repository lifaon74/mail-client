let buffer = '';
const parseEHLOResponse = new TransformStream({
  transform(chunk, controller) {
    buffer += chunk.toString();
    if (buffer.endsWith('\n')) {
      const lines = buffer.split('\n');
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('250')) {
          controller.enqueue(lines[i]);
        }
      }
      buffer = '';
    }
  }
});

const writable = new WritableStream({
  write(chunk) {
    parseEHLOResponse.write(chunk);
  }
});

const readable = new ReadableStream({
  start(controller) {
    parseEHLOResponse.pipeTo(controller);
  }
});

writable.write("250-smtp.example.com Hello example.com [192.0.2.1], pleased to meet you\n250-ENHANCEDSTATUSCODES\n250-8BITMIME\n250-SIZE\n250-DSN\n");
writable.write("250-ETRN\n250-AUTH LOGIN PLAIN\n250-STARTTLS\n250-DELIVERBY\n250 CHUNKING\n");
writable.close();

const reader = readable.getReader();
reader.read().then((result) => {
  console.log(result.value);
});
