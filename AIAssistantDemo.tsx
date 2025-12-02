import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Send, Sparkles } from "lucide-react";
import { useState } from "react";

interface Message {
  type: 'user' | 'assistant';
  text: string;
}

export default function AIAssistantDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { type: 'assistant', text: 'مرحباً! أنا المساعد الذكي 🤖 كيف يمكنني مساعدتك اليوم؟' }
  ]);

  const exampleQuestions = [
    'ما هي دورة الماء؟',
    'كيف تتكون السحب؟',
    'لماذا تمطر السماء؟',
  ];

  const handleExampleClick = (question: string) => {
    const userMessage: Message = { type: 'user', text: question };
    const assistantResponses: Record<string, string> = {
      'ما هي دورة الماء؟': 'دورة الماء هي رحلة الماء في الطبيعة! 💧 الماء يتبخر من البحر، يصعد للسماء، يتحول لسحب، ثم يعود للأرض كمطر. إنها دائرة جميلة لا تتوقف!',
      'كيف تتكون السحب؟': 'السحب تتكون عندما يتبخر الماء ويصعد للسماء ☁️ عندما يبرد بخار الماء في الجو، يتحول إلى قطرات صغيرة جداً تتجمع معاً وتصبح سحابة!',
      'لماذا تمطر السماء؟': 'عندما تصبح السحب ثقيلة جداً بقطرات الماء ⛈️ لا تستطيع حملها أكثر، فتسقط على شكل مطر! مثل الإسفنجة الممتلئة بالماء.',
    };
    
    const assistantMessage: Message = { 
      type: 'assistant', 
      text: assistantResponses[question] || 'سؤال رائع! دعني أفكر في إجابة مناسبة لك 🤔'
    };

    setMessages([...messages, userMessage, assistantMessage]);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#B3D9E1] to-[#D7C2D8] px-6 py-3 rounded-full shadow-lg mb-6">
            <Bot className="w-6 h-6 text-white" />
            <span className="text-lg font-semibold text-white">المساعد الذكي</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            صديقك الذكي في رحلة التعلم
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مساعد ذكي متاح دائماً للإجابة على أسئلة الأطفال بطريقة بسيطة وممتعة
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-4 border-[#B3D9E1] shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-8 h-8 text-[#B3D9E1]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">المساعد الذكي</h3>
                  <p className="text-white/90">متصل الآن • جاهز للمساعدة</p>
                </div>
              </div>
            </div>

            <CardContent className="p-6 bg-gradient-to-br from-[#EFD9AA]/10 to-white">
              {/* Chat Messages */}
              <div className="space-y-4 mb-6 min-h-[300px] max-h-[400px] overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl shadow-md ${
                        message.type === 'user'
                          ? 'bg-gradient-to-br from-[#D7C2D8] to-[#F2AAAE] text-white'
                          : 'bg-white border-2 border-[#B3D9E1] text-gray-800'
                      }`}
                    >
                      {message.type === 'assistant' && (
                        <div className="flex items-center gap-2 mb-2">
                          <Bot className="w-5 h-5 text-[#B3D9E1]" />
                          <span className="text-sm font-semibold text-[#B3D9E1]">المساعد الذكي</span>
                        </div>
                      )}
                      <p className="text-base leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Example Questions */}
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-3 font-semibold">جرب هذه الأسئلة:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => handleExampleClick(question)}
                      className="bg-white hover:bg-[#EFD9AA]/20 border-2 border-[#EFD9AA] text-gray-700"
                    >
                      <Sparkles className="ml-2 w-4 h-4" />
                      {question}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Input Area */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="اكتب سؤالك هنا..."
                  className="flex-1 px-4 py-3 border-2 border-[#B3D9E1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B3D9E1] text-lg"
                  disabled
                />
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] hover:from-[#9AC5CE] hover:to-[#9FBFA5] text-white px-6"
                  disabled
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                هذا عرض توضيحي • جرب الأسئلة المقترحة أعلاه
              </p>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-2 border-[#B1CFB7] bg-gradient-to-br from-[#B1CFB7]/10 to-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#B1CFB7] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">إجابات دقيقة</h3>
                <p className="text-gray-600 text-sm">يفهم الأسئلة ويقدم إجابات صحيحة ومناسبة للأطفال</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#EFD9AA] bg-gradient-to-br from-[#EFD9AA]/10 to-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#EFD9AA] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😊</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">لغة بسيطة</h3>
                <p className="text-gray-600 text-sm">يشرح بطريقة سهلة وممتعة يفهمها الأطفال</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#B3D9E1] bg-gradient-to-br from-[#B3D9E1]/10 to-white">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#B3D9E1] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">متاح دائماً</h3>
                <p className="text-gray-600 text-sm">جاهز للمساعدة في أي وقت، ليلاً أو نهاراً</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
