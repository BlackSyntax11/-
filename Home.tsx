import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Brain, Sparkles, Users, Video, MessageCircle, Star, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { APP_TITLE } from "@/const";
import InteractiveLessonDemo from "@/components/sections/InteractiveLessonDemo";
import AIAssistantDemo from "@/components/sections/AIAssistantDemo";
import AdaptiveLearning from "@/components/sections/AdaptiveLearning";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  const [, setLocation] = useLocation();
  
  return (
    <div className="min-h-screen" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#B1CFB7] via-[#EFD9AA] to-[#B3D9E1] py-20">
        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <Sparkles className="w-5 h-5 text-[#F4C09D]" />
              <span className="text-lg font-semibold">منصة التعليم الذكي للأطفال</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight max-w-4xl">
              المعلم الذكي
              <span className="block text-[#B3D9E1] mt-2">رحلة تعليمية ممتعة</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
              نحول الدروس النصية إلى محتوى تفاعلي مليء بالألوان والحركة والمرح! 
              مع مساعد ذكي يفهم احتياجات كل طفل ويقدم الدعم المناسب
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setLocation("/login")}
                className="text-lg px-8 py-6 bg-[#B3D9E1] hover:bg-[#9AC5CE] text-gray-800 shadow-xl"
              >
                <Sparkles className="ml-2 w-5 h-5" />
                ابدأ التجربة المجانية
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setLocation("/lessons")}
                className="text-lg px-8 py-6 bg-white/80 backdrop-blur-sm border-2 border-[#D7C2D8] hover:bg-[#D7C2D8]/20 shadow-xl"
              >
                <Video className="ml-2 w-5 h-5" />
                دخول تجريبي
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#F2AAAE] rounded-full opacity-50 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#D7C2D8] rounded-full opacity-50 blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#EFBA93] rounded-full opacity-40 blur-xl"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              لماذا المعلم الذكي؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              منصة تعليمية متكاملة تجمع بين التكنولوجيا والمرح لتجربة تعليمية لا تُنسى
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-[#B1CFB7] bg-gradient-to-br from-[#B1CFB7]/10 to-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#B1CFB7] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">محتوى تفاعلي</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700">
                  نحول الدروس النصية الممله إلى فيديوهات ورسوم متحركة وصور ملونة تجذب انتباه الأطفال
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#EFD9AA] bg-gradient-to-br from-[#EFD9AA]/10 to-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#EFD9AA] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Brain className="w-8 h-8 text-gray-800" />
                </div>
                <CardTitle className="text-2xl">تعلم تكيفي</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700">
                  كل طفل مختلف! منصتنا تتكيف مع مستوى كل طالب وتقدم له شروحات مخصصة تناسب قدراته
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#B3D9E1] bg-gradient-to-br from-[#B3D9E1]/10 to-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#B3D9E1] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-gray-800" />
                </div>
                <CardTitle className="text-2xl">مساعد ذكي</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700">
                  مساعد ذكي متاح على مدار الساعة للإجابة على أسئلة الطلاب وتقديم الدعم التعليمي الفوري
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#D7C2D8] bg-gradient-to-br from-[#D7C2D8]/10 to-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#D7C2D8] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">للطلاب والمعلمين</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700">
                  يساعد الطلاب على التعلم بشكل أفضل ويوفر على المعلمين الوقت في إعداد المحتوى التفاعلي
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#EFBA93] bg-gradient-to-br from-[#EFBA93]/10 to-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#EFBA93] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">تجربة ممتعة</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700">
                  التعلم يصبح لعبة! مع الألوان الزاهية والرسوم المتحركة والتفاعل المستمر
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#F2AAAE] bg-gradient-to-br from-[#F2AAAE]/10 to-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-[#F2AAAE] rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">سريع وسهل</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-gray-700">
                  واجهة بسيطة وسهلة الاستخدام للأطفال، مع استجابة سريعة وتجربة سلسة
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-gradient-to-br from-[#D7C2D8]/20 via-[#EFD9AA]/20 to-[#B3D9E1]/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              كيف تعمل المنصة؟
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              رحلة تعليمية بسيطة من البداية إلى النهاية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#B1CFB7] to-[#B3D9E1] rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">اختر الدرس</h3>
              <p className="text-lg text-gray-600">
                اختر الدرس الذي تريد تعلمه من المنهج الدراسي
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#EFD9AA] to-[#EFBA93] rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-3xl font-bold text-gray-800">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">تعلم بالمرح</h3>
              <p className="text-lg text-gray-600">
                شاهد الفيديوهات والرسوم المتحركة واستمتع بالتعلم
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D7C2D8] to-[#F2AAAE] rounded-full flex items-center justify-center mx-auto shadow-2xl">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">اسأل المساعد</h3>
              <p className="text-lg text-gray-600">
                إذا كان لديك سؤال، المساعد الذكي جاهز للمساعدة
              </p>
            </div>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="border-4 border-[#B3D9E1] shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#B3D9E1] to-[#B1CFB7] p-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <CardContent className="p-8 bg-white">
                <div className="aspect-video bg-gradient-to-br from-[#EFD9AA]/30 to-[#B3D9E1]/30 rounded-xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <BookOpen className="w-24 h-24 text-[#B3D9E1] mx-auto" />
                    <p className="text-2xl font-bold text-gray-700">نموذج تفاعلي للمنصة</p>
                    <p className="text-lg text-gray-600">قريباً: عرض تجريبي مباشر</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Lesson Demo */}
      <InteractiveLessonDemo />

      {/* AI Assistant Demo */}
      <AIAssistantDemo />

      {/* Adaptive Learning */}
      <AdaptiveLearning />

      {/* Classroom Scenario */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              في الفصل الدراسي
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              كيف يستخدم المعلمون والطلاب المنصة في الفصل
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#B1CFB7]/10 to-white rounded-2xl border-2 border-[#B1CFB7] shadow-lg">
                <div className="w-12 h-12 bg-[#B1CFB7] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">المعلم يختار الدرس</h3>
                  <p className="text-gray-600">يختار المعلم الدرس من المنهج ويعرضه على الشاشة الذكية</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#EFD9AA]/10 to-white rounded-2xl border-2 border-[#EFD9AA] shadow-lg">
                <div className="w-12 h-12 bg-[#EFD9AA] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-gray-800">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">الطلاب يشاهدون المحتوى</h3>
                  <p className="text-gray-600">يشاهد الطلاب الفيديوهات والرسوم المتحركة التفاعلية</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#B3D9E1]/10 to-white rounded-2xl border-2 border-[#B3D9E1] shadow-lg">
                <div className="w-12 h-12 bg-[#B3D9E1] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-gray-800">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">التفاعل والأسئلة</h3>
                  <p className="text-gray-600">الطلاب يتفاعلون مع المحتوى ويطرحون الأسئلة على المساعد الذكي</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-[#D7C2D8]/10 to-white rounded-2xl border-2 border-[#D7C2D8] shadow-lg">
                <div className="w-12 h-12 bg-[#D7C2D8] rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">التقييم والمتابعة</h3>
                  <p className="text-gray-600">المعلم يتابع تقدم كل طالب ويحصل على تقارير مفصلة</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-[#EFBA93]/30 via-[#D7C2D8]/30 to-[#B3D9E1]/30 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white">
                <div className="text-center space-y-4">
                  <Users className="w-32 h-32 text-[#B3D9E1] mx-auto" />
                  <p className="text-2xl font-bold text-gray-700">سيناريو تعليمي تفاعلي</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F2AAAE] rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#B1CFB7] rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#B3D9E1] via-[#D7C2D8] to-[#EFBA93]">
        <div className="container">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800">
              جاهز لبدء رحلة التعلم؟
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
              انضم إلى آلاف الطلاب والمعلمين الذين يستخدمون المعلم الذكي لتجربة تعليمية أفضل
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => setLocation("/login")}
                className="text-xl px-10 py-7 bg-white hover:bg-gray-100 text-gray-800 shadow-2xl"
              >
                <Sparkles className="ml-2 w-6 h-6" />
                ابدأ مجاناً الآن
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => setLocation("/assistant")}
                className="text-xl px-10 py-7 bg-white/50 backdrop-blur-sm border-2 border-white hover:bg-white/70 shadow-2xl"
              >
                جرب المساعد الذكي
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-white">
        <div className="container">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">{APP_TITLE}</h3>
            <p className="text-gray-400">منصة التعليم الذكي للأطفال</p>
            <p className="text-gray-500 text-sm">© 2025 جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
