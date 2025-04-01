import openai  

openai.api_key = 'YOUR_API_KEY'  # کلید API خود را جایگزین کنید  

response = openai.ChatCompletion.create(  
    model="gpt-3.5-turbo",  # Codex به عنوان یک مدل در نظر گرفته شده است.  
    messages=[  
        {"role": "user", "content": "Write a Python function to calculate the factorial of a number."}  
    ]  
)  

print(response['choices'][0]['message']['content'])  