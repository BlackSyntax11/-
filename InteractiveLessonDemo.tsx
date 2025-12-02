import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Video, Image as ImageIcon, Music } from "lucide-react";
import { useState } from "react";

export default function InteractiveLessonDemo() {
  const [activeTab, setActiveTab] = useState<'before' | 'after'>('before');

  return (
    <section className="py-20 bg-gradient-to-br from-[#B1CFB7]/20 via-white to-[#EFD9AA]/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            من نص ممل إلى محتوى تفاعلي
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            شاهد كيف نحول الدروس النصية التقليدية إلى تجربة تعليمية ممتعة
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            <Button
              size="lg"
              variant={activeTab === 'before' ? 'default' : 'outline'}
              onClick={() => setActiveTab('before')}
              className={activeTab === 'before' ? 'bg-[#B3D9E1] hover:bg-[#9AC5CE] text-gray-800' : ''}
            >
              <FileText className="ml-2 w-5 h-5" />
              قبل التحويل
            </Button>
            <Button
              size="lg"
              variant={activeTab === 'after' ? 'default' : 'outline'}
              onClick={() => setActiveTab('after')}
              className={activeTab === 'after' ? 'bg-[#EFBA93] hover:bg-[#E8A87D] text-gray-800' : ''}
            >
              <Video className="ml-2 w-5 h-5" />
              بعد التحويل
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Before */}
            <Card className={`border-4 transition-all duration-300 ${activeTab === 'before' ? 'border-[#B3D9E1] shadow-2xl scale-105' : 'border-gray-200 opacity-50'}`}>
              <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-200">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileText className="w-6 h-6" />
                  الدرس التقليدي
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="bg-white p-6 rounded-lg border-2 border-gray-300 min-h-[300px]">
                  <h3 className="font-bold text-lg mb-4 text-gray-800">درس: دورة الماء في الطبيعة</h3>
                  <div className="text-gray-600 space-y-3 text-sm leading-relaxed">
                    <p>دورة الماء هي عملية طبيعية مستمرة تحدث في الطبيعة.</p>
                    <p>تبدأ الدورة بتبخر الماء من البحار والمحيطات بفعل حرارة الشمس.</p>
                    <p>يتحول بخار الماء إلى سحب في السماء.</p>
                    <p>ثم تسقط الأمطار على الأرض.</p>
                    <p>يعود الماء إلى البحار والأنهار مرة أخرى.</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <span className="text-sm">نص جامد وممل 😴</span>
                </div>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-[#B3D9E1] to-[#EFBA93] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* After */}
            <Card className={`border-4 transition-all duration-300 ${activeTab === 'after' ? 'border-[#EFBA93] shadow-2xl scale-105' : 'border-gray-200 opacity-50'}`}>
              <CardHeader className="bg-gradient-to-r from-[#EFD9AA] to-[#EFBA93]">
                <CardTitle className="flex items-center gap-2 text-2xl text-gray-800">
                  <Video className="w-6 h-6" />
                  الدرس التفاعلي
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="bg-gradient-to-br from-[#B3D9E1]/20 to-[#EFD9AA]/20 p-6 rounded-lg border-2 border-[#EFBA93] min-h-[300px]">
                  <h3 className="font-bold text-lg mb-4 text-gray-800">درس: دورة الماء في الطبيعة 🌊</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md">
                      <Video className="w-8 h-8 text-[#B3D9E1]" />
                      <span className="text-sm font-medium">فيديو متحرك يشرح دورة الماء</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md">
                      <ImageIcon className="w-8 h-8 text-[#EFBA93]" />
                      <span className="text-sm font-medium">رسوم توضيحية ملونة</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-md">
                      <Music className="w-8 h-8 text-[#D7C2D8]" />
                      <span className="text-sm font-medium">أغنية تعليمية عن دورة الماء</span>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-[#B1CFB7] to-[#B3D9E1] rounded-lg text-white text-center font-bold shadow-md">
                      + ألعاب تفاعلية واختبارات ممتعة
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#EFBA93]">
                  <span className="text-sm font-bold">محتوى تفاعلي وممتع! 🎉</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-[#D7C2D8]/20 to-[#F2AAAE]/20 border-2 border-[#D7C2D8]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">النتيجة؟</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-4xl font-bold text-[#B3D9E1] mb-2">85%</div>
                    <div className="text-sm text-gray-600">زيادة في التركيز</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#EFBA93] mb-2">92%</div>
                    <div className="text-sm text-gray-600">استيعاب أفضل</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#D7C2D8] mb-2">78%</div>
                    <div className="text-sm text-gray-600">حب التعلم</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
