from openai import OpenAI

client = OpenAI(
    api_key = "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"
)

response = client.chat.completions.create(
    model = "gpt-3.5-turbo",
    messages = [
        {"role": "user", "content": "What is hello in mandarin?"}
    ]
)

print(response.choices[0].message.content)