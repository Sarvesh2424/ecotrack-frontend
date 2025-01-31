import { useEffect, useState } from "react";
import { Crisp } from "crisp-sdk-web";
import { 
  ChatBubbleLeftRightIcon,
  LightBulbIcon,
  SparklesIcon,
  ArrowRightIcon,
  QuestionMarkCircleIcon,
  HomeIcon,
  LeafIcon
} from "@heroicons/react/24/outline";

const EcoAi = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  
  useEffect(() => {
    Crisp.configure("7c8523d3-9d67-4d22-a243-75f39055865e");
  }, []);

  const topics = [
    {
      icon: HomeIcon,
      title: "Home & Energy",
      questions: [
        "How can I reduce my home energy consumption?",
        "What are the best eco-friendly home improvements?",
        "How effective are solar panels for homes?"
      ]
    },
    {
      icon: LeafIcon,
      title: "Sustainable Living",
      questions: [
        "What are some daily habits for sustainable living?",
        "How can I start composting at home?",
        "Which eco-friendly products are worth investing in?"
      ]
    },
    {
      icon: LightBulbIcon,
      title: "Tips & Tricks",
      questions: [
        "What are quick ways to reduce my carbon footprint?",
        "How can I make my diet more eco-friendly?",
        "What are the best ways to reduce plastic usage?"
      ]
    }
  ];

  const handleQuestionClick = (question) => {
    Crisp.message.send("text", question);
    Crisp.chat.open();
  };

  return (
    <div className="max-w-4xl mx-auto py-8 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-4">
          <ChatBubbleLeftRightIcon className="w-12 h-12 text-green-500" />
          EcoAI Assistant
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your personal AI companion for sustainable living. Get expert advice, eco-friendly tips,
          and learn how to reduce your environmental impact.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Topics Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => setSelectedTopic(selectedTopic === index ? null : index)}
                className={`glass-container p-6 rounded-2xl text-left transition-all duration-300 transform hover:scale-102 hover:shadow-2xl ${
                  selectedTopic === index ? 'ring-2 ring-green-500 shadow-2xl' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
                    <topic.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{topic.title}</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Click to explore common questions about {topic.title.toLowerCase()}
                </p>
              </button>
            ))}
          </div>

          {/* Selected Topic Questions */}
          {selectedTopic !== null && (
            <div className="glass-container p-6 rounded-2xl space-y-4 animate-fade-in">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
                  <QuestionMarkCircleIcon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-800">
                  Popular Questions about {topics[selectedTopic].title}
                </h3>
              </div>
              <div className="space-y-3">
                {topics[selectedTopic].questions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    className="w-full p-4 bg-white/50 rounded-xl flex items-center justify-between hover:bg-green-50 transition-all duration-300 group"
                  >
                    <span className="text-gray-700 group-hover:text-green-600 text-left">
                      {question}
                    </span>
                    <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-green-500 transform group-hover:translate-x-1 transition-all duration-300" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Chat Preview Section */}
        <div className="glass-container p-6 rounded-2xl space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
              <SparklesIcon className="w-6 h-6" />
            </div>
            <h3 className="font-semibold text-gray-800">Start Chatting</h3>
          </div>

          <p className="text-gray-600">
            Get personalized advice and answers to your environmental questions from our AI assistant.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Available 24/7
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Instant responses
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Expert environmental knowledge
            </div>
          </div>

          <button
            onClick={() => Crisp.chat.open()}
            className="w-full bg-gradient-to-r from-green-600 to-green-400 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:from-green-700 hover:to-green-500 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <ChatBubbleLeftRightIcon className="w-5 h-5" />
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default EcoAi;
