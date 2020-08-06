var arr = {
    "Hi" : "Hello there!",
    "hi" : "hey user!",
    "hello" : "hello there!",
    "hey" : "what's up?!",
    "what's up?" : "nothing much.",
    "Hello" : "Hi",
    "How are you?" : "Fine and you?",
    "how are you?" : "fine and you?",
    "I am fine" : "Glad to hear",
    "I am not fine" : "Find books and become friends!",
    "what is your age?" : "I am a bot I don't age.",
    "what are you doing?" : "Answering you",
    "what is your name" : "I am a chatbot",
    "What do you do" : "I solve queries",
    "What can you do" : "What do you want me to do?",
    "Do you have girlfriend?": "I am a bot, I don't have one.",
    "I am tired" : "well, go get some fresh air",
    "ok" : ":)",
    "hahaha" : "laugh hard feel at ease",
    "not funny" : "sorry",
    "bye" : "have a nice day",
    "Tell me a joke" : "I Invented a new world... Plagiarism!",
    "say something" : "No, you say something!",
    "Say Something" : "Type anything nice you want to ask me."
};

const btn = () => {
    var text = document.querySelector("#inputBox").value;
    document.querySelector("#user").innerHTML += "User: " + text + "<br/>";
        if(text in arr){
         document.querySelector("#user").innerHTML += "Chatbot: " + arr[text] + "<br/>";
    }else {
        document.querySelector("#user").innerHTML += "Chatbot: " + "I don't understand! <br/>";
    }
}
