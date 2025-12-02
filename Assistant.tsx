import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bot, Send, Sparkles, ArrowRight, Home, BookOpen, MessageCircle, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

interface Message {
  type: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

export default function Assistant() {
  const [, setLocation] = useLocation();
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'assistant',
      text: 'مرحباً! أنا المساعد الذكي 🤖 كيف يمكنني مساعدتك اليوم؟',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const exampleQuestions = [
    'ما هي دورة الماء؟',
    'كيف تتكون السحب؟',
    'لماذا تمطر السماء؟',
    'ما هو التبخر؟',
    'كيف أجمع الأعداد؟',
    'ما هي الحروف الهجائية؟'
  ];

  const getAssistantResponse = (question: string): string => {
    const responses: Record<string, string> = {
      'ما هي دورة الماء؟': 'دورة الماء هي رحلة الماء في الطبيعة! 💧 الماء يتبخر من البحر، يصعد للسماء، يتحول لسحب، ثم يعود للأرض كمطر. إنها دائرة جميلة لا تتوقف!',
      'كيف تتكون السحب؟': 'السحب تتكون عندما يتبخر الماء ويصعد للسماء ☁️ عندما يبرد بخار الماء في الجو، يتحول إلى قطرات صغيرة جداً تتجمع معاً وتصبح سحابة!',
      'لماذا تمطر السماء؟': 'عندما تصبح السحب ثقيلة جداً بقطرات الماء ⛈️ لا تستطيع حملها أكثر، فتسقط على شكل مطر! مثل الإسفنجة الممتلئة بالماء.',
      'ما هو التبخر؟': 'التبخر هو عندما يتحول الماء من سائل إلى بخار بسبب حرارة الشمس ☀️ مثل عندما تجف البركة في الصيف!',
      'كيف أجمع الأعداد؟': 'جمع الأعداد سهل! 🔢 مثلاً: 2 + 3 = 5. تخيل أن لديك تفاحتين وأعطاك صديقك 3 تفاحات أخرى، كم أصبح معك؟ 5 تفاحات! 🍎',
      'ما هي الحروف الهجائية؟': 'الحروف الهجائية هي أحرف اللغة العربية 📖 عددها 28 حرف: أ ب ت ث ج ح خ... وهكذا! نستخدمها لكتابة الكلمات.'
    };

    return responses[question] || 'سؤال رائع! 🤔 دعني أفكر... يمكنك أن تسأل المعلم أو تبحث في الدرس عن الإجابة. أنا هنا لمساعدتك دائماً!';
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    const userMessage: Message = {
      type: 'user',
      text: messageText,
      timestamp: new Date()
    };

    const assistantMessage: Message = {
      type: 'assistant',
      text: getAssistantResponse(messageText),
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, assistantMessage]);
    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3D9E1]/20 via-white to-[#D7C2D8]/20 flex flex-col" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#B3D9E1] to-[#D7C2D8] text-white shadow-xl">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => setLocation("/lessons")}
              className="text-white hover:bg-white/20"
            >
              <ArrowRight className="w-6 h-6 ml-2" />
              رجوع
            </Button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Bot className="w-6 h-6 text-[#B3D9E1]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">المساعد الذكي</h1>
                <p className="text-white/90 text-sm">متصل الآن • جاهز للمساعدة</p>
              </div>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto py-6">
        <div className="container max-w-4xl space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-4 rounded-2xl shadow-lg ${
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
                <div className={`text-xs mt-2 ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                  {message.timestamp.toLocaleTimeString('ar-SA', { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Example Questions */}
      {messages.length <= 1 && (
        <div className="py-4 bg-white/50 backdrop-blur-sm">
          <div className="container max-w-4xl">
            <p className="text-sm text-gray-700 mb-3 font-semibold text-center">جرب هذه الأسئلة:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {exampleQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSendMessage(question)}
                  className="bg-white hover:bg-[#EFD9AA]/20 border-2 border-[#EFD9AA] text-gray-700"
                >
                  <Sparkles className="ml-2 w-4 h-4" />
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t-4 border-[#B3D9E1] shadow-2xl">
        <div className="container max-w-4xl py-4">
          <div className="flex gap-3">
            <Input
              type="text"
              placeholder="اكتب سؤالك هنا..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 px-4 py-3 border-2 border-[#B3D9E1] focus:border-[#B3D9E1] text-lg rounded-xl"
            />
            <Button
              size="lg"
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] hover:from-[#9AC5CE] hover:to-[#9FBFA5] text-white px-6 rounded-xl"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t-4 border-[#B3D9E1] shadow-2xl">
        <div className="container py-4">
          <div className="flex justify-around items-center">
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="flex flex-col items-center gap-1 hover:bg-[#B3D9E1]/10"
            >
              <Home className="w-6 h-6 text-gray-600" />
              <span className="text-xs text-gray-600">الرئيسية</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setLocation("/lessons")}
              className="flex flex-col items-center gap-1 hover:bg-[#B3D9E1]/10"
            >
              <BookOpen className="w-6 h-6 text-gray-600" />
              <span className="text-xs text-gray-600">دروسي</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col items-center gap-1 bg-[#B3D9E1]/20"
            >
              <MessageCircle className="w-6 h-6 text-[#B3D9E1]" />
              <span className="text-xs text-[#B3D9E1] font-bold">المساعد</span>
            </Button>
            <Button
              variant="ghost"
              onClick={() => setLocation("/profile")}
              className="flex flex-col items-center gap-1 hover:bg-[#B3D9E1]/10"
            >
              <UserIcon className="w-6 h-6 text-gray-600" />
              <span className="text-xs text-gray-600">حسابي</span>
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
