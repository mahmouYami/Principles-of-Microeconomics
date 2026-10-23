 

        function switchView(viewId) {

            document.querySelectorAll('.page-container').forEach(page => page.classList.remove('active-page'));

            document.getElementById(viewId).classList.add('active-page');

            window.scrollTo({ top: 0, behavior: 'smooth' }); // يرجعك لأول الصفحة لما تبدل بين الصفحات

        }



        function enterPlatform(mode) {

            document.getElementById('bg-overlay').classList.add('dark-mode');

            switchView('view-home');

            const studyCard = document.getElementById('card-study');

            const examCards = document.querySelectorAll('.card-exam');

            const subtitle = document.getElementById('dashboard-subtitle');



            if (mode === 'learn') {

                subtitle.innerText = "Learning Mode Active";

                studyCard.style.display = 'flex';

                examCards.forEach(card => card.style.display = 'none');

            } else if (mode === 'battle') {

                subtitle.innerText = "Battle Mode Active";

                studyCard.style.display = 'none';

                examCards.forEach(card => card.style.display = 'flex');

            }

        }



        function goHome() {

            document.getElementById('bg-overlay').classList.remove('dark-mode');

            switchView('view-landing');

        }



        function toggleAccordion(header) {

            const item = header.parentElement;

            const allItems = document.querySelectorAll('.accordion-item');

            allItems.forEach(i => { if (i !== item) i.classList.remove('active'); });

            item.classList.toggle('active');

        }



        const midtermQuestions = [{ q: "اكتب السؤال الأول للميدتيرم هنا؟", c: ["الاختيار الأول", "الاختيار الثاني", "الاختيار الثالث", "الاختيار الرابع"], a: 0, exp: "الشرح هنا" }];

        const lastYearQuestions = [{ q: "اكتب سؤال العام الماضي هنا؟", c: ["الاختيار الأول", "الاختيار الثاني", "الاختيار الثالث", "الاختيار الرابع"], a: 2, exp: "الشرح هنا" }];

        const generalQuestions = [ {
    q: "سعر السلعة ارتفع من 20 إلى 25 جنيها فانخفضت الكمية المطلوبة من 400 إلى 360 وحدة؛ إذن انخفض الإيراد الكلي.",
    c: ["حقيقي", "خطأ شنيع"],
    a: 1,
    exp: "لأن الإيراد الكلي زاد من 8000 إلى 9000 ولم ينخفض (20 × 400 = 8000، 25 × 360 = 9000)."
  },
  {
    q: "ارتفع سعر السلعة Y بمقدار 20% فانخفضت الكمية المطلوبة من السلعة X بمقدار 10%؛ إذن المرونة المتقاطعة Exy = -0.5 والسلعتان متكاملتان.",
    c: ["حقيقي", "خطأ شنيع"],
    a: 0,
    exp: "لأن المرونة المتقاطعة = -10% / 20% = -0.5 والإشارة السالبة تعني أنهما سلعتان متكاملتان."
  },
  {
    q: "تغير سعر السلعة يؤدي إلى انتقال منحنى الطلب بأكمله.",
    c: ["حقيقي", "خطأ شنيع"],
    a: 1,
    exp: "لأن تغير السعر يؤدي إلى تغير في الكمية المطلوبة انتقالاً على نفس المنحنى وليس تغيراً في الطلب."
  },
  {
    q: "إذا كانت دالة الطلب Qd = 100 - P ودالة العرض Qs = -20 + 2P وفرضت الحكومة ضريبة بـ 3 جنيهات على كل وحدة يبيعها المنتج، فإن المنتج يتحمل العبء الأكبر من الضريبة.",
    c: ["حقيقي", "خطأ شنيع"],
    a: 1,
    exp: "لأن ميل دالة الطلب بالقيمة المطلقة أقل من ميل العرض، فالطلب أقل مرونة، وبالتالي يقع العبء الأكبر من الضريبة على المستهلك وليس المنتج."
  },
  {
    q: "إذا كان سعر السوق أعلى من سعر التوازن، فإن الفائض يدفع السعر إلى أقل من ذلك.",
    c: ["حقيقي", "خطأ شنيع"],
    a: 0,
    exp: "عندما يكون السعر أعلى من التوازن يحدث فائض (زيادة في العرض عن الطلب) يدفع الأسعار للانخفاض باتجاه نقطة التوازن."
  },
  {
    q: "إذا كانت دالة الطلب Qd = 90 - 3P ودالة العرض Qs = -10 + 2P فإن سعر التوازن 20 وكمية التوازن 30.",
    c: ["حقيقي", "خطأ شنيع"],
    a: 0,
    exp: "بمساواة الدالتين: 90 - 3P = -10 + 2P، ينتج 5P = 100، إذن السعر P = 20، وبالتعويض تكون الكمية Q = 90 - 3(20) = 30."
  },
  {
    q: "في النظام الاشتراكي الذي يحدد ما ننتجه هو جهاز الأثمان والقوى السوقية.",
    c: ["حقيقي", "خطأ شنيع"],
    a: 1,
    exp: "لأن جهاز قوى السوق والأثمان يحدد الإنتاج في النظام الرأسمالي، بينما يحدده جهاز التخطيط المركزي في النظام الاشتراكي."
  },
  {
    q: "السلع الدنيا الرديئة تكون مرونة الطلب الدخلية لها سالبة.",
    c: ["حقيقي", "خطأ شنيع"],
    a: 0,
    exp: "السلع الدنيا والرديئة تكون مرونة الطلب الدخلية لها سالبة دائماً، حيث يقل الطلب عليها بزيادة الدخل."
  },
  {
    q: "إذا انخفض إنتاج الطعام من 30 إلى 27 ثم إلى 22 وحدة عند زيادة إنتاج الآلات من صفر إلى 1 ثم إلى 2، فإن تكلفة الفرصة البديلة للآلة الثانية 5 وحدات، وتشير إلى تزايد التكلفة البديلة.",
    c: ["حقيقي", "خطأ شنيع"],
    a: 0,
    exp: "تكلفة الآلة الأولى = 30 - 27 = 3، وتكلفة الآلة الثانية = 27 - 22 = 5، وهي تكلفة فرصة بديلة متزايدة."
  },
  {
    q: "منحنى إمكانيات الإنتاج يكون محدباً نحو نقطة الأصل بسبب تزايد التكلفة البديلة.",
    c: ["حقيقي", "خطأ شنيع"],
    a: 1,
    exp: "لأن منحنى إمكانيات الإنتاج يكون مقعراً نحو نقطة الأصل بسبب قاعدة تزايد التكلفة البديلة وليس محدباً."
  }];

        const comprehensiveQuestions = [{ q: "اكتب سؤال الاختبار الشامل هنا؟", c: ["الاختيار الأول", "الاختيار الثاني", "الاختيار الثالث", "الاختيار الرابع"], a: 3, exp: "الشرح هنا" }];



        let activeQuiz = [];

        let currentIndex = 0;

        let correctAnswers = 0;

        let wrongAnswers = 0;

        let hasAnswered = false;



        function startQuiz(type) {

            if (type === 'midterm') { activeQuiz = midtermQuestions; document.getElementById('quiz-title').innerText = "الميدتيرم"; }

            else if (type === 'lastYear') { activeQuiz = lastYearQuestions; document.getElementById('quiz-title').innerText = "العام الماضي"; }

            else if (type === 'general') { activeQuiz = generalQuestions; document.getElementById('quiz-title').innerText = "بنك الكويز"; }

            

            currentIndex = 0; correctAnswers = 0; wrongAnswers = 0;

            switchView('view-quiz');

            renderQuestion();

        }



        function startComprehensiveQuiz() {

            activeQuiz = comprehensiveQuestions; 

            currentIndex = 0; correctAnswers = 0; wrongAnswers = 0;

            document.getElementById('quiz-title').innerText = "الاختبار الشامل";

            switchView('view-quiz'); 

            renderQuestion(); 

        }



        function renderQuestion() {

            hasAnswered = false;

            document.getElementById('btn-next').style.display = 'none';

            document.getElementById('explanation-box').style.display = 'none';

            

            document.getElementById('val-correct').innerText = correctAnswers;

            document.getElementById('val-wrong').innerText = wrongAnswers;

            document.getElementById('val-remain').innerText = activeQuiz.length - currentIndex;

            

            let progress = (currentIndex / activeQuiz.length) * 100;

            document.getElementById('progress-bar').style.width = progress + '%';



            let currentQ = activeQuiz[currentIndex];

            if(!currentQ) return; 

            

            document.getElementById('question-text').innerText = `${currentIndex + 1}. ${currentQ.q}`;

            let container = document.getElementById('options-container');

            container.innerHTML = '';

            

            currentQ.c.forEach((choice, index) => {

                let btn = document.createElement('button');

                btn.className = 'option-btn';

                btn.innerText = choice;

                btn.onclick = () => checkAnswer(index, btn);

                container.appendChild(btn);

            });

        }



        function checkAnswer(selectedIndex, clickedBtn) {

            if (hasAnswered) return;

            hasAnswered = true;

            let currentQ = activeQuiz[currentIndex];

            let buttons = document.querySelectorAll('.option-btn');

            buttons.forEach(btn => btn.disabled = true);



            if (selectedIndex === currentQ.a) {

                clickedBtn.classList.add('correct-ans'); 

                correctAnswers++;

            } else {

                clickedBtn.classList.add('wrong-ans'); 

                buttons[currentQ.a].classList.add('correct-ans'); 

                wrongAnswers++;

            }

            

            document.getElementById('val-correct').innerText = correctAnswers;

            document.getElementById('val-wrong').innerText = wrongAnswers;

            

            let expBox = document.getElementById('explanation-box');

            expBox.innerHTML = `<strong>إضاءة:</strong> ${currentQ.exp || "الإجابة الصحيحة مظللة بالأخضر"}`;

            expBox.style.display = 'block';

            

            document.getElementById('btn-next').style.display = 'block';

        }



        function processNext() {

            currentIndex++;

            if (currentIndex < activeQuiz.length) { 

                renderQuestion(); 

            } else {

                document.getElementById('progress-bar').style.width = '100%';

                switchView('view-score');

                

                let percentage = Math.round((correctAnswers / activeQuiz.length) * 100) || 0;

                document.getElementById('score-value').innerText = percentage + '%';

                document.getElementById('score-fraction').innerText = `${correctAnswers} إجابات صحيحة من أصل ${activeQuiz.length}`;

                document.getElementById('score-circle').style.background = `conic-gradient(var(--neon-cyan) ${percentage}%, transparent 0%)`;

                

                if(percentage >= 50) fireConfetti(); 

            }

        }



        function fireConfetti() {

            var duration = 3000; 

            var end = Date.now() + duration;

            (function frame() {

                confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#00e5ff', '#ff2a75', '#ffffff'] });

                confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#00e5ff', '#ff2a75', '#ffffff'] });

                if (Date.now() < end) requestAnimationFrame(frame);

            }());

        }

    
