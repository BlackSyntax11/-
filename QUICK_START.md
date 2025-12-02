# 🚀 البدء السريع

## المتطلبات المسبقة

- **Node.js 16+** - [تحميل](https://nodejs.org/)
- **VS Code** - [تحميل](https://code.visualstudio.com/)

---

## 3 خطوات فقط للبدء:

### 1️⃣ فتح Terminal في VS Code

```
Ctrl + ` (أو Cmd + ` على Mac)
```

### 2️⃣ تثبيت المتطلبات

```bash
npm install
```

### 3️⃣ تشغيل الموقع

```bash
npm run dev
```

---

## ✅ تم!

افتح المتصفح على:
```
http://localhost:5173/
```

---

## 📝 ملفات مهمة للتعديل

| الملف | الوصف |
|------|-------|
| `client/src/pages/Home.tsx` | الصفحة الرئيسية |
| `client/src/pages/Login.tsx` | صفحة تسجيل الدخول |
| `client/src/pages/Lessons.tsx` | صفحة الدروس |
| `client/src/index.css` | الألوان والأنماط |

---

## 🎨 تغيير الألوان

افتح `client/src/index.css` وابحث عن:

```css
--color-pistachio: #B1CFB7;
--color-vanilla: #EFD9AA;
--color-polar-sky: #B3D9E1;
--color-lilac: #D7C2D8;
--color-apricot: #EFBA93;
--color-blush: #F2AAAE;
```

---

## 📱 الصفحات

- `/` - الصفحة الرئيسية
- `/login` - تسجيل الدخول
- `/lessons` - الدروس
- `/lesson/1` - درس تفاعلي
- `/assistant` - المساعد الذكي
- `/profile` - الملف الشخصي

---

## 🆘 مشاكل شائعة

**Port مشغول؟**
```bash
npm run dev -- --port 3000
```

**خطأ في npm؟**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

للمزيد من التفاصيل، اقرأ `README_AR.md`
