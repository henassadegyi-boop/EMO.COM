const designs = [
 ["فروشگاه مدرن","فروشگاهی","۴٬۹۰۰٬۰۰۰","سرمه‌ای و آبی","بله","فروشگاه آنلاین با صفحه محصولات، دسته‌بندی و سبد خرید.","photo-1555529669-e69e7aa0ba9a"],
 ["فروشگاه پوشاک","فروشگاهی","۶٬۵۰۰٬۰۰۰","مشکی و طلایی","خیر","ویترین شیک برای پوشاک و اکسسوری با طراحی واکنش‌گرا.","photo-1483985988355-763728e1935b"],
 ["سایت شرکتی آوان","شرکتی","۸٬۰۰۰٬۰۰۰","سفید و آبی","بله","معرفی خدمات، تیم، نمونه‌کارها و راه‌های ارتباطی شرکت.","photo-1497366754035-f200968a6e72"],
 ["آکادمی آنلاین","آموزشی","۷٬۲۰۰٬۰۰۰","بنفش و سفید","خیر","صفحه دوره‌ها، معرفی مدرس و بخش ثبت‌نام هنرجویان.","photo-1523240795612-9a054b0db644"],
 ["کافه لند","خدماتی","۳٬۸۰۰٬۰۰۰","قهوه‌ای و کرم","خیر","منوی دیجیتال و معرفی فضای کافه با تصاویر جذاب.","photo-1445116572660-236099ec97a0"],
 ["پرتفولیو شخصی","شخصی","۲٬۵۰۰٬۰۰۰","مشکی و نقره‌ای","بله","رزومه آنلاین و نمایش پروژه‌ها برای طراحان و فریلنسرها.","photo-1498050108023-c5249f4df085"],
 ["فروشگاه دیجیتال","فروشگاهی","۹٬۵۰۰٬۰۰۰","بنفش و مشکی","بله","فروش محصولات دیجیتال، فایل‌ها و خدمات دانلودی.","photo-1518770660439-4636190af475"],
 ["املاک آریا","خدماتی","۷٬۹۰۰٬۰۰۰","سبز و سفید","خیر","معرفی فایل‌های ملکی و دسته‌بندی املاک برای خرید و اجاره.","photo-1560518883-ce09059eeffa"],
 ["کلینیک سلامت","شرکتی","۸٬۵۰۰٬۰۰۰","فیروزه‌ای و سفید","بله","معرفی خدمات، پزشکان و فرم درخواست نوبت.","photo-1576091160399-112ba8d25d1d"],
 ["گالری هنری","شخصی","۳٬۲۰۰٬۰۰۰","کرم و زرشکی","خیر","گالری تصویری برای نمایش آثار هنری و محصولات دست‌ساز.","photo-1579783902614-a3fb3927b6a5"],
 ["رستوران مزه","خدماتی","۴٬۶۰۰٬۰۰۰","قرمز و ذغالی","خیر","منوی غذا، معرفی رستوران و راهنمای سفارش و تماس.","photo-1517248135467-4c7edcad34c4"],
 ["فروشگاه لوازم خانه","فروشگاهی","۱۱٬۰۰۰٬۰۰۰","آبی و سفید","بله","فروشگاه لوازم خانه با فیلتر محصولات و صفحات معرفی کالا.","photo-1555041469-a586c61ea9bc"],
 ["آژانس مسافرتی","خدماتی","۶٬۸۰۰٬۰۰۰","آبی اقیانوسی","خیر","معرفی تورها، مقصدها و فرم درخواست مشاوره سفر.","photo-1488646953014-85cb44e25828"],
 ["شرکت فناوری","شرکتی","۱۲٬۰۰۰٬۰۰۰","سرمه‌ای و نئونی","بله","وب‌سایت مدرن برای شرکت‌های فناوری و استارتاپ‌ها.","photo-1519389950473-47ba0277781c"],
 ["وبلاگ دانستنی","شخصی","۲٬۹۰۰٬۰۰۰","سبز و کرم","خیر","وبلاگ دسته‌بندی‌شده برای مقاله‌ها و محتوای آموزشی.","photo-1499750310107-5fef28a66643"],
 ["فروشگاه ساعت","فروشگاهی","۸٬۹۰۰٬۰۰۰","مشکی و طلایی","بله","ویترین لوکس ساعت با صفحه جزئیات و معرفی ویژگی‌ها.","photo-1524805444758-089113d48a6d"],
 ["مدرسه هوشمند","آموزشی","۹٬۸۰۰٬۰۰۰","آبی و نارنجی","خیر","معرفی مدرسه، اطلاعیه‌ها، برنامه‌ها و محتوای آموزشی.","photo-1509062522246-3755977927d7"],
 ["معماری مدرن","شرکتی","۱۰٬۵۰۰٬۰۰۰","خاکستری و سفید","بله","نمایش پروژه‌های معماری، خدمات طراحی و گالری تصاویر.","photo-1600607687939-ce8a6c25118c"],
 ["سالن زیبایی","خدماتی","۵٬۹۰۰٬۰۰۰","صورتی و سفید","خیر","معرفی خدمات، نمونه‌کارها و اطلاعات رزرو وقت.","photo-1560066984-138dadb4c035"],
 ["فروشگاه موبایل","فروشگاهی","۱۳٬۰۰۰٬۰۰۰","مشکی و آبی","بله","فروش موبایل و لوازم جانبی با دسته‌بندی و مشخصات فنی.","photo-1511707171634-5f897ff02aa9"],
 ["رزومه حرفه‌ای","شخصی","۱٬۹۰۰٬۰۰۰","سفید و سرمه‌ای","خیر","صفحه شخصی مینیمال برای معرفی مهارت‌ها و سوابق کاری.","photo-1500648767791-00dcc994a43e"],
 ["دوره برنامه‌نویسی","آموزشی","۱۴٬۰۰۰٬۰۰۰","مشکی و سبز","بله","معرفی دوره‌های برنامه‌نویسی و مسیر یادگیری مهارت‌ها.","photo-1515879218367-8466d910aaa4"],
 ["فروشگاه گل","فروشگاهی","۵٬۴۰۰٬۰۰۰","سبز و صورتی","خیر","فروش آنلاین گل و گیاه با طراحی لطیف و گالری محصولات.","photo-1490750967868-88aa4486c946"],
 ["داشبورد مدیریتی","شرکتی","۲۵٬۰۰۰٬۰۰۰","ذغالی و بنفش","بله","رابط مدیریتی نمایشی برای گزارش‌ها و مدیریت اطلاعات.","photo-1551288049-bebda4e38f71"],
 ["پلتفرم اختصاصی","خدماتی","۱۰۰٬۰۰۰٬۰۰۰","قابل انتخاب","خیر","پروژه اختصاصی با طراحی و امکانات متناسب با نیاز شما؛ قیمت پس از بررسی نهایی می‌شود.","photo-1558655146-9f40138edfeb"]
];
const grid=document.getElementById('siteGrid'), search=document.getElementById('searchInput');
let currentFilter='همه';
const photo=(id)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=82`;
function render(){
 const term=search.value.trim().toLowerCase();
 const list=designs.map((d,i)=>({d,i})).filter(({d})=>(currentFilter==='همه'||d[1]===currentFilter)&&(`${d[0]} ${d[1]} ${d[3]}`.toLowerCase().includes(term)));
 grid.innerHTML=list.map(({d,i})=>`<article class="site-card" data-index="${i}" style="animation-delay:${(i%6)*.045}s"><div class="site-preview"><img loading="lazy" src="${photo(d[6])}" alt="${d[0]}"><span class="preview-label">EMO / ${String(i+1).padStart(2,'0')}</span></div><div class="site-info"><div class="site-info-top"><h3>${d[0]}</h3><span class="site-type">${d[1]}</span></div><p>${d[5]}</p><div class="card-bottom"><strong>${d[2]} تومان</strong><span>مشاهده جزئیات ←</span></div></div></article>`).join('');
 document.getElementById('emptyState').hidden=!!list.length;
}
grid.addEventListener('click',e=>{const card=e.target.closest('.site-card');if(!card)return;const d=designs[+card.dataset.index];document.getElementById('modalTitle').textContent=d[0];document.getElementById('modalDescription').textContent=d[5];document.getElementById('detailType').textContent=d[1];document.getElementById('detailPrice').textContent=d[2]+' تومان';document.getElementById('detailTheme').textContent=d[3];document.getElementById('detailDomain').textContent=d[4];document.getElementById('modalImage').innerHTML=`<img src="${photo(d[6])}" alt="${d[0]}">`;document.getElementById('buyLink').href='https://rubika.ir/arako_13';document.getElementById('modalBackdrop').classList.add('show');document.getElementById('modalBackdrop').setAttribute('aria-hidden','false');});
function closeModal(){document.getElementById('modalBackdrop').classList.remove('show');document.getElementById('modalBackdrop').setAttribute('aria-hidden','true')}
document.getElementById('modalClose').addEventListener('click',closeModal);
document.getElementById('modalBackdrop').addEventListener('click',e=>{if(e.target.id==='modalBackdrop')closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.getElementById('filters').addEventListener('click',e=>{const b=e.target.closest('.filter');if(!b)return;document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');currentFilter=b.dataset.filter;render()});
search.addEventListener('input',render);
document.querySelector('.menu-toggle').addEventListener('click',()=>document.querySelector('.topbar').classList.toggle('nav-open'));
document.querySelectorAll('.topbar nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.topbar').classList.remove('nav-open')));
render();