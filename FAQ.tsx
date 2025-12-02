import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: 'ما هي الفئة العمرية المستهدفة؟',
      answer: 'المنصة مصممة خصيصاً لطلاب المرحلة الابتدائية (من 6 إلى 12 سنة)، مع محتوى يتناسب مع كل مرحلة دراسية.'
    },
    {
      question: 'هل يحتاج الطفل لمساعدة الأهل لاستخدام المنصة؟',
      answer: 'المنصة مصممة بواجهة بسيطة جداً يمكن للأطفال استخدامها بأنفسهم. لكن وجود الأهل في البداية يساعد الطفل على التعود على المنصة بشكل أسرع.'
    },
    {
      question: 'كيف يضمن المساعد الذكي دقة المعلومات؟',
      answer: 'المساعد الذكي مدرب على المناهج الدراسية المعتمدة، ويتم مراجعة إجاباته من قبل فريق تربوي متخصص لضمان دقة المعلومات وملاءمتها للأطفال.'
    },
    {
      question: 'هل يمكن للمعلمين استخدام المنصة في الفصل؟',
      answer: 'بالتأكيد! المنصة مصممة للاستخدام في المدرسة والمنزل. المعلمون يمكنهم عرض الدروس التفاعلية على الشاشة الذكية ومتابعة تقدم الطلاب.'
    },
    {
      question: 'ما هي المواد الدراسية المتوفرة؟',
      answer: 'حالياً نوفر محتوى تفاعلي للمواد الأساسية: الرياضيات، العلوم، اللغة العربية، واللغة الإنجليزية. نعمل على إضافة المزيد من المواد قريباً.'
    },
    {
      question: 'هل المنصة متاحة على الهواتف الذكية؟',
      answer: 'نعم! المنصة تعمل على جميع الأجهزة: الحاسوب، الأجهزة اللوحية، والهواتف الذكية، مع تصميم متجاوب يناسب جميع الشاشات.'
    },
    {
      question: 'كيف يمكنني متابعة تقدم طفلي؟',
      answer: 'يوفر حساب ولي الأمر تقارير مفصلة عن تقدم الطفل، الدروس المكتملة، نقاط القوة والضعف، والوقت المستغرق في التعلم.'
    },
    {
      question: 'هل هناك فترة تجريبية مجانية؟',
      answer: 'نعم! نوفر فترة تجريبية مجانية لمدة 14 يوماً للتعرف على المنصة وتجربة جميع الميزات بدون أي التزام مالي.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#D7C2D8]/20 via-white to-[#B3D9E1]/20">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D7C2D8] to-[#F2AAAE] px-6 py-3 rounded-full shadow-lg mb-6">
            <HelpCircle className="w-6 h-6 text-white" />
            <span className="text-lg font-semibold text-white">الأسئلة الشائعة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            لديك سؤال؟ لدينا الإجابة!
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول منصة المعلم الذكي
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-4 border-[#B3D9E1] shadow-2xl">
            <CardContent className="p-8">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-2 border-gray-200 rounded-xl px-6 hover:border-[#B3D9E1] transition-colors"
                  >
                    <AccordionTrigger className="text-right hover:no-underline py-6">
                      <span className="text-lg font-bold text-gray-800 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6 pr-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-br from-[#EFD9AA]/30 to-[#EFBA93]/30 border-2 border-[#EFD9AA]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  لم تجد إجابة لسؤالك؟
                </h3>
                <p className="text-gray-700 mb-6">
                  فريقنا جاهز للإجابة على جميع استفساراتك
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a 
                    href="mailto:support@smartteacher.com" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    📧 راسلنا عبر البريد
                  </a>
                  <a 
                    href="tel:+966500000000" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    📞 اتصل بنا
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
