const natural =require('natural');
var classifier =new natural.BayesClassifier(); 
const data= require("./dataset.json");
tokenizer = new natural.WordTokenizer();
//data set
data.forEach(item=>{
  classifier.addDocument(tokenizer.tokenize(item.description),item.category); 
});
//train
classifier.train();
console.log(classifier.classify("my roomates janani studying btech it is  me daily not allowing me to do my daily works change her to next room"));
classifier.save('classifier.json',function(err,classifier){}); 