# Space Shooter — بناء APK مجانًا عبر GitHub Actions

## الخطوات

1. اعمل حساب على github.com (لو معندكش)، وسوّي مستودع (Repository) جديد فاضي
   - خليه **Public** أو **Private**، الاتنين شغالين
   - سمّيه أي اسم، مثلًا `space-shooter`

2. ارفع كل ملفات الفولدر ده (اللي جوه الـ ZIP) للمستودع، بالحفاظ على نفس الهيكل:
   ```
   package.json
   capacitor.config.json
   .github/workflows/build-apk.yml
   www/index.html
   www/manifest.json
   www/sw.js
   www/icon-192.png
   www/icon-512.png
   ```
   - أسهل طريقة: من صفحة المستودع على GitHub اضغط **Add file → Upload files** واسحب كل الفولدر دفعة واحدة
   - أو لو بتستخدم Git من التيرمنال:
     ```
     git init
     git add .
     git commit -m "initial commit"
     git branch -M main
     git remote add origin https://github.com/USERNAME/space-shooter.git
     git push -u origin main
     ```

3. بمجرد ما الملفات تترفع على فرع `main`، الـ GitHub Action هيشتغل تلقائيًا
   - تقدر تتابعه من تبويب **Actions** فوق في صفحة المستودع
   - البناء بياخد حوالي 3-5 دقايق

4. لما يخلص (علامة ✅ خضرا)، ادخل على الـ run اللي خلص، هتلاقي تحت **Artifacts** ملف اسمه
   `space-shooter-apk` — دوسه عشان تنزل ملف ZIP فيه الـ APK

5. فك الـ ZIP، هتلاقي `app-debug.apk` — ده الملف اللي تنقله بلوتوث أو أي طريقة وتثبته على أي موبايل أندرويد
   (لازم تفعّل "تثبيت من مصادر غير معروفة" في إعدادات الموبايل أول مرة)

## ملاحظات
- ده APK نوع **debug** (للتجربة والاستخدام الشخصي)، شغال 100% بدون نت زي ما اتفقنا،
  وفيه نفس منطق "لو فيه نت يفتح shoto.online وإلا يشتغل محليًا"
- لو غيرت أي حاجة في اللعبة (داخل www/index.html)، كل ما تعمل push جديد، الـ Action هيبني APK جديد تلقائيًا
- لو حابب توزّع التطبيق بشكل رسمي على Google Play لاحقًا، هيبقى لازم build نوع **release** موقّع بمفتاح (مختلف عن الخطوات دي)
