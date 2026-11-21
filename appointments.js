/* Departments Data */

const departments = {

    pediatrics: {
        name: "الأطفال",
        price: 180,

        documents: [
            "بطاقة الهوية أو شهادة ميلاد الطفل إن وجدت.",
            "سجل التطعيمات.",
            "التقارير الطبية السابقة.",
            "نتائج التحاليل أو الأشعة السابقة.",
            "قائمة الأدوية التي يتناولها الطفل."
        ],

        preparation: [
            "تحديد عمر الطفل وسبب الزيارة.",
            "تسجيل الأعراض ومدة ظهورها.",
            "يُفضّل حضور أحد الوالدين أو ولي الأمر.",
            "إبلاغ الطبيب بأي حساسية معروفة."
        ],

        warning:
            "في حالة ظهور أعراض شديدة أو تدهور مفاجئ، يجب طلب الرعاية العاجلة."
    },


    internal: {
        name: "الباطنة",
        price: 200,

        documents: [
            "بطاقة الهوية.",
            "التقارير الطبية السابقة.",
            "نتائج التحاليل الأخيرة.",
            "تقارير الأشعة السابقة.",
            "قائمة الأدوية الحالية."
        ],

        preparation: [
            "تحديد الشكوى الأساسية ومدة ظهورها.",
            "ذكر الأمراض المزمنة إن وجدت.",
            "ترتيب التقارير الطبية حسب تاريخها.",
            "تجهيز الأسئلة التي ترغب في مناقشتها مع الطبيب."
        ],

        warning:
            "يُرجى إبلاغ الطبيب بأي حساسية دوائية أو أدوية يتم استخدامها حاليًا."
    },


    emergency: {
        name: "الطوارئ",
        price: 100,

        documents: [
            "بطاقة الهوية إن أمكن.",
            "التقارير الطبية السابقة إن وجدت.",
            "قائمة الأدوية الحالية.",
            "معلومات عن الحساسية الدوائية."
        ],

        preparation: [
            "قسم الطوارئ مخصص للحالات التي تحتاج إلى تقييم عاجل.",
            "لا يشترط وجود حجز مسبق للحالات الطارئة.",
            "توضيح الأعراض ووقت بدايتها عند الوصول.",
            "اتباع تعليمات الفريق الطبي."
        ],

        warning:
            "في الحالات الخطيرة، لا تنتظر موعد الحجز الإلكتروني. اطلب المساعدة العاجلة فورًا."
    },


    rabies: {
    name: "علاج السعار",
    price: 150,

    documents: [
        "بطاقة الهوية أو أي مستند لإثبات البيانات.",
        "تاريخ ووقت العضة أو الخدش إن وُجد.",
        "معلومات عن الحيوان المتسبب في الإصابة إن أمكن.",
        "شهادة تطعيم الحيوان إن كانت متاحة.",
        "سجل التطعيمات السابقة ضد السعار إن وُجد.",
        "أي تقارير طبية أو مستندات خاصة بالتعرض السابق."
    ],

    preparation: [
        "التوجه إلى المركز فورًا عند التعرض لعضة أو خدش من حيوان يُشتبه في إصابته.",
        "غسل مكان العضة أو الخدش بالماء الجاري والصابون لمدة 15 دقيقة.",
        "عدم تأخير التقييم الطبي في انتظار موعد الحجز.",
        "إبلاغ الطبيب بنوع الحيوان ومكان الإصابة ووقت حدوثها.",
        "إخبار الطبيب إذا سبق تلقي تطعيم ضد السعار."
    ],

    warning:
        "التعرض المحتمل للسعار يحتاج إلى تقييم طبي عاجل. لا تنتظر موعدًا إلكترونيًا؛ اغسل الجرح فورًا بالماء والصابون لمدة 15 دقيقة، ثم توجّه إلى أقرب جهة طبية لتقييم الحالة وبدء الوقاية اللازمة."
},


    lab: {
        name: "المعمل والأشعة",
        price: 120,

        documents: [
            "بطاقة الهوية.",
            "طلب التحليل أو الأشعة إن كان مطلوبًا.",
            "التقارير والفحوصات السابقة ذات الصلة.",
            "قائمة الأدوية الحالية."
        ],

        preparation: [
            "تحديد نوع التحليل أو الأشعة المطلوبة.",
            "التأكد من موعد الفحص ومدته.",
            "اتباع تعليمات التحضير الخاصة بالفحص.",
            "الوصول قبل الموعد بوقت كافٍ."
        ],

        warning:
            "بعض الفحوصات تحتاج إلى تحضير خاص، يُرجى الاستفسار من القسم المختص عن أي تعليمات خاصة قبل موعد الحجز."
    },


    dental: {
        name: "الأسنان",
        price: 150,

        documents: [
            "بطاقة الهوية.",
            "أشعة الأسنان السابقة إن وجدت.",
            "التقارير الطبية المتعلقة بعلاج الأسنان.",
            "قائمة الأدوية الحالية."
        ],

        preparation: [
            "تحديد سبب الزيارة ومكان الألم إن وجد.",
            "تنظيف الأسنان قبل الحضور.",
            "إبلاغ الطبيب بأي أمراض مزمنة.",
            "إحضار الأشعة السابقة إن وجدت."
        ],

        warning:
            "في حالة وجود تورم شديد أو صعوبة في التنفس أو البلع، يجب طلب الرعاية العاجلة."
    },


    orthopedics: {
        name: "العظام",
        price: 220,

        documents: [
            "بطاقة الهوية.",
            "أشعة X-ray أو MRI أو CT السابقة إن وجدت.",
            "التقارير الطبية السابقة.",
            "تقارير العمليات الجراحية إن وجدت.",
            "قائمة الأدوية المستخدمة."
        ],
        preparation: [
            "تحديد مكان الألم أو الإصابة.",
            "توضيح وقت حدوث الإصابة.",
            "ذكر أي إصابات سابقة في نفس المكان.",
            "ارتداء ملابس مناسبة للفحص."
        ],

        warning:
            "الإصابات الشديدة أو التشوه المفاجئ أو فقدان الإحساس تحتاج إلى تقييم عاجل."
    },


    gynecology: {
        name: "النساء والتوليد",
        price: 250,

        documents: [
            "بطاقة الهوية.",
            "التقارير الطبية السابقة.",
            "نتائج التحاليل.",
            "صور الأشعة أو السونار السابقة.",
            "ملف متابعة الحمل إن وجد."
        ],

        preparation: [
            "تحديد سبب الزيارة.",
            "في حالة متابعة الحمل، يُفضّل ذكر عمر الحمل.",
            "توضيح الأعراض الحالية إن وجدت.",
            "إحضار نتائج الفحوصات السابقة."
        ],

        warning:
            "الأعراض الشديدة أثناء الحمل، مثل النزيف الغزير أو الألم الشديد، تستدعي التقييم العاجل."
    }

};


/* Get Department from URL */

const params = new URLSearchParams(
    window.location.search
);

const selectedDepartment = params.get("department");


/* Page Elements */

const departmentName =
    document.getElementById("departmentName");

const departmentPrice =
    document.getElementById("departmentPrice");

const instructionsContent =
    document.getElementById("instructionsContent");

const appointmentForm =
    document.getElementById("appointmentForm");


/* Display Department */

function showDepartment(departmentKey) {

    const department = departments[departmentKey];

    // Check if department exists
    if (!department) {

        departmentName.textContent =
            "قسم غير محدد";

        departmentPrice.textContent = "--";

        instructionsContent.innerHTML = 
            <div class="empty-message">
                <p>
                    لم يتم تحديد القسم بشكل صحيح.
                    يرجى الرجوع إلى صفحة الخدمات
                    واختيار القسم المطلوب.
                </p>
            </div>
        ;

        appointmentForm.style.display = "none";

        return;
    }


    // Show department name and price
    departmentName.textContent =
        department.name;

    departmentPrice.textContent =
        department.price + " جنيه";


    // Show instructions
    instructionsContent.innerHTML = `

        <div class="instruction-section">

            <h3>الأوراق والمستندات المطلوبة</h3>

            <ul>
                ${department.documents.map(item =>
                    `<li>${item}</li>`
                ).join("")}
            </ul>

        </div>


        <div class="instruction-section">

            <h3>إرشادات قبل الزيارة</h3>

            <ul>
                ${department.preparation.map(item =>
                    `<li>${item}</li>`
                ).join("")}
            </ul>

        </div>


        <div class="warning-box">

            <strong>ملاحظة مهمة</strong>

            <p>${department.warning}</p>

        </div>

    `;

}


/* Run Department Function */

showDepartment(selectedDepartment);


/* Prevent Past Dates */

const dateInput =
    document.getElementById("appointmentDate");

const today = new Date();

const year = today.getFullYear();

const month = String(today.getMonth() + 1)
    .padStart(2, "0");

const day = String(today.getDate())
    .padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


/* Submit Booking */

appointmentForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const department =
            departments[selectedDepartment];

        alert(
            "تم إرسال طلب الحجز بنجاح!\n\n" +
            "القسم: " + department.name + "\n" +
            "سعر الكشف: " + department.price + " جنيه\n" +
            "التاريخ: " + dateInput.value
        );

    }
);