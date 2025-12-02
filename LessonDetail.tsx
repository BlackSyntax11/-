import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Play, CheckCircle, Circle, MessageCircle, Award } from "lucide-react";
import { useState } from "react";
import { useLocation, useRoute } from "wouter";

export default function LessonDetail() {
  const [, params] = useRoute("/lesson/:id");
  const [, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const lesson = {
    title: "دورة الماء في الطبيعة",
    subject: "العلوم",
    icon: "💧",
    steps: [
      {
        title: "مقدمة",
        type: "video",
        content: "مرحباً! اليوم سنتعلم عن دورة الماء في الطبيعة 🌊"
      },
      {
        title: "التبخر",
        type: "interactive",
        content: "عندما تسخن الشمس الماء، يتحول إلى بخار ويصعد للسماء ☀️"
      },
      {
        title: "تكون السحب",
        type: "interactive",
        content: "بخار الماء يبرد في السماء ويتحول إلى قطرات صغيرة تكون السحب ☁️"
      },
      {
        title: "المطر",
        type: "interactive",
        content: "عندما تصبح السحب ثقيلة، تسقط قطرات الماء على شكل مطر 🌧️"
      },
      {
        title: "اختبار قصير",
        type: "quiz",
        content: "الآن دعنا نختبر ما تعلمته! 🎯"
      }
    ]
  };

  const handleCompleteStep = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    if (currentStep < lesson.steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = Math.round((completedSteps.length / lesson.steps.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#B3D9E1]/20 via-white to-[#EFD9AA]/20" dir="rtl">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] text-white shadow-xl">
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
            <div className="text-center flex-1">
              <div className="text-3xl mb-2">{lesson.icon}</div>
              <h1 className="text-2xl font-bold">{lesson.title}</h1>
              <p className="text-white/90">{lesson.subject}</p>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Progress */}
      <section className="py-6 bg-white shadow-sm">
        <div className="container">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-700">التقدم: {progress}%</span>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#EFBA93]" />
              <span className="text-sm font-semibold text-gray-700">+{completedSteps.length * 10} نقطة</span>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </section>

      {/* Steps Navigation */}
      <section className="py-6">
        <div className="container">
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {lesson.steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                  currentStep === index
                    ? "bg-gradient-to-br from-[#B3D9E1] to-[#B1CFB7] text-white scale-110 shadow-xl"
                    : completedSteps.includes(index)
                    ? "bg-[#B1CFB7]/20 text-gray-700"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {completedSteps.includes(index) ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
                <span className="text-xs font-semibold whitespace-nowrap">{step.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container max-w-4xl">
          <Card className="border-4 border-[#B3D9E1] shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-gray-800">
                  {lesson.steps[currentStep].title}
                </h2>

                {/* Video/Interactive Content */}
                <div className="aspect-video bg-gradient-to-br from-[#B3D9E1]/20 to-[#EFD9AA]/20 rounded-2xl flex items-center justify-center border-4 border-[#B3D9E1]">
                  {lesson.steps[currentStep].type === "video" ? (
                    <div className="text-center space-y-4">
                      <Play className="w-24 h-24 text-[#B3D9E1] mx-auto" />
                      <p className="text-xl text-gray-700">فيديو تعليمي تفاعلي</p>
                    </div>
                  ) : lesson.steps[currentStep].type === "quiz" ? (
                    <div className="text-center space-y-4 p-8">
                      <div className="text-6xl mb-4">🎯</div>
                      <p className="text-xl text-gray-700">اختبار تفاعلي</p>
                    </div>
                  ) : (
                    <div className="text-center space-y-4 p-8">
                      <div className="text-6xl mb-4">
                        {currentStep === 1 ? "☀️" : currentStep === 2 ? "☁️" : "🌧️"}
                      </div>
                      <p className="text-xl text-gray-700">رسوم متحركة تفاعلية</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <Card className="bg-gradient-to-br from-[#EFD9AA]/20 to-white border-2 border-[#EFD9AA]">
                  <CardContent className="p-6">
                    <p className="text-2xl text-gray-700 leading-relaxed">
                      {lesson.steps[currentStep].content}
                    </p>
                  </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <div className="flex gap-4 justify-center pt-4">
                  {currentStep > 0 && (
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={handlePreviousStep}
                      className="text-lg px-8 border-2 border-[#B3D9E1]"
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                      السابق
                    </Button>
                  )}
                  <Button
                    size="lg"
                    onClick={handleCompleteStep}
                    className="text-lg px-8 bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] hover:from-[#9AC5CE] hover:to-[#9FBFA5] text-white shadow-xl"
                  >
                    {currentStep === lesson.steps.length - 1 ? (
                      <>
                        <CheckCircle className="ml-2 w-5 h-5" />
                        إنهاء الدرس
                      </>
                    ) : (
                      <>
                        التالي
                        <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Ask Assistant */}
          <div className="mt-6">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setLocation("/assistant")}
              className="w-full border-2 border-[#D7C2D8] hover:bg-[#D7C2D8]/20 text-lg"
            >
              <MessageCircle className="ml-2 w-5 h-5" />
              هل لديك سؤال؟ اسأل المساعد الذكي
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
