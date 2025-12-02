import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, Target, Award } from "lucide-react";

export default function AdaptiveLearning() {
  const students = [
    {
      name: 'أحمد',
      level: 'مبتدئ',
      color: 'from-[#B1CFB7] to-[#B3D9E1]',
      borderColor: 'border-[#B1CFB7]',
      icon: '🌱',
      description: 'يحتاج إلى شروحات مبسطة مع أمثلة كثيرة',
      content: [
        'فيديوهات قصيرة وبسيطة',
        'أمثلة من الحياة اليومية',
        'تمارين سهلة ومشجعة',
        'مراجعة متكررة للمفاهيم'
      ]
    },
    {
      name: 'فاطمة',
      level: 'متوسط',
      color: 'from-[#EFD9AA] to-[#EFBA93]',
      borderColor: 'border-[#EFD9AA]',
      icon: '🌿',
      description: 'تفهم الأساسيات وتحتاج لتحديات أكبر',
      content: [
        'شروحات متوسطة التعقيد',
        'تمارين متنوعة',
        'أنشطة تفاعلية',
        'مشاريع صغيرة'
      ]
    },
    {
      name: 'محمد',
      level: 'متقدم',
      color: 'from-[#D7C2D8] to-[#F2AAAE]',
      borderColor: 'border-[#D7C2D8]',
      icon: '🌳',
      description: 'متفوق ويبحث عن محتوى متقدم',
      content: [
        'مواضيع إضافية متقدمة',
        'تحديات ومسابقات',
        'مشاريع معقدة',
        'ربط المفاهيم ببعضها'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-[#EFD9AA]/10 to-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#EFD9AA] to-[#EFBA93] px-6 py-3 rounded-full shadow-lg mb-6">
            <Brain className="w-6 h-6 text-gray-800" />
            <span className="text-lg font-semibold text-gray-800">التعلم التكيفي</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            لكل طفل طريقته الخاصة في التعلم
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            المنصة تتعرف على مستوى كل طالب وتقدم له محتوى مخصص يناسب قدراته واحتياجاته
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {students.map((student, index) => (
            <Card key={index} className={`border-4 ${student.borderColor} shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
              <CardHeader className={`bg-gradient-to-br ${student.color} text-white`}>
                <div className="text-center">
                  <div className="text-5xl mb-3">{student.icon}</div>
                  <CardTitle className="text-2xl mb-2">{student.name}</CardTitle>
                  <div className="inline-block bg-white/30 backdrop-blur-sm px-4 py-1 rounded-full">
                    <span className="text-sm font-semibold">{student.level}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4 text-center font-medium">{student.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-bold text-gray-800 mb-3">المحتوى المخصص:</p>
                  {student.content.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#B3D9E1] to-[#EFBA93] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it works */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-4 border-[#B3D9E1] shadow-2xl bg-gradient-to-br from-white to-[#B3D9E1]/10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">كيف يعمل التعلم التكيفي؟</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#B1CFB7] to-[#B3D9E1] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">تقييم مستمر</h3>
                      <p className="text-gray-600">المنصة تراقب أداء الطالب وتفهم نقاط القوة والضعف</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EFD9AA] to-[#EFBA93] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Brain className="w-6 h-6 text-gray-800" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">تحليل ذكي</h3>
                      <p className="text-gray-600">الذكاء الاصطناعي يحلل البيانات ويحدد أفضل طريقة للتعلم</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D7C2D8] to-[#F2AAAE] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">محتوى مخصص</h3>
                      <p className="text-gray-600">كل طالب يحصل على دروس وتمارين تناسب مستواه بالضبط</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#B3D9E1] to-[#B1CFB7] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800 mb-2">تطور مستمر</h3>
                      <p className="text-gray-600">المحتوى يتطور مع تقدم الطالب لضمان التحدي المناسب</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-[#B3D9E1]/20 to-[#EFD9AA]/20 rounded-2xl border-2 border-[#B3D9E1]">
                <p className="text-center text-lg text-gray-700">
                  <span className="font-bold text-[#B3D9E1]">النتيجة:</span> كل طفل يتعلم بالسرعة المناسبة له، 
                  دون ملل أو إحباط، مع تحسن مستمر في الأداء! 🎯
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
