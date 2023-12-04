import { Ollama } from 'ollama-node';
const response = await fetch("https://finance.yahoo.com/topic/stock-market-news");

const html = await response.text(); // HTML string
console.log(html);
const ollama = new Ollama();
await ollama.setModel("mistral");

// callback to print each word 
const print = (word: string) => {
    process.stdout.write(word);
}
ollama.setSystemPrompt("You are a news analyst. You are fed the raw html. Your job is to summarize the content into just a few bullet points and headlines. Don't mention any of the code.");
await ollama.streamingGenerate(`Website data: ${html}`, print);


// Set System Prompt
// Sets the system prompt to use with this model. Overrides anything set in the Modelfile.

// Set Template
// ollama.setTemplate("this is a template")
// Add a Parameter
// ollama.addParameter("stop", "User:")
// Delete a Parameter
// ollama.deleteParameter("stop", "User:")
// Delete a Parameter by Name
// ollama.deleteParameterByName("stop");
// Deletes all parameters with that name.

// Delete All Parameters
// ollama.deleteAllParameters();
// Show All Parameters
// const params = ollama.showParameters();
// Show System Prompt
// const sprompt = await ollama.showSystemPrompt()
// Useful if you want to update the system prompt based on the existing one.

// Show Template
// const template = ollama.showTemplate();
// Show Model
// const model = ollama.showModel();
// Shows the current model name

// Show Model Info
// const info = await ollama.showModelInfo();
