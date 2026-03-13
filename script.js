/**
 * M_U_TIME - Premium JS System
 * Total Overhaul for Stability & Aesthetics
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const loader = document.getElementById('loader');
    const sections = document.querySelectorAll('.section-v3');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-link');
    const serviceApp = document.getElementById('serviceApp');
    const courseApp = document.getElementById('courseApp');
    const contactApp = document.getElementById('contactApp');
    const modal = document.getElementById('customModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    // Configuration
    const TG_CONFIG = {
        token: '8671751097:AAFjIqQoU_RUmjpmBCI-tdToPZfGz9aZvGs',
        chatId: '8721952828'
    };

    const appData = {
        courses: [
            { id: 'sec', title: 'Ethical Hacking & Cyber Security', desc: 'একদম জিরো থেকে প্রো হ্যাকার হয়ে উঠুন! এই কোর্সে পাচ্ছেন $500 মূল্যের Premium RAT, Malware, এবং Keyloggers একদম ফ্রি। রিয়েল-লাইফ প্র্যাকটিক্যাল অ্যাটাক শিখে নিজের হ্যাকিং ক্যারিয়ার গড়ুন। আগামী ২৫/০৩/২০২৬ তারিখের পর তৃতীয় ব্যচ এর রেজিষ্ট্রেশন শেষ হবে। মেয়াদ শেষ হবার আগেই যোগাযোগ করুন।', price: '২৫০০', meta: ['Premium RAT Free', 'Tools Included', 'Private Community'] },
            { id: 'py', title: 'Python Automation & Bot Making', desc: 'নিজের পার্সোনাল অটোমেশন টুল এবং টেলিগ্রাম বট বানানো শিখুন। যেকোনো ওয়েবসাইট থেকে ডাটা স্ক্র্যাপিং এবং প্রতিদিনের বোরিং কাজগুলো অটোমেটিক করে ফেলুন এক নিমেষেই। প্রো লেভেলের স্ক্রিপ্টিং শিখুন।', price: '১৫০০', meta: ['Python Scripts Free', 'Bot Source Code', 'Full Support'] },
            { id: 'dark', title: 'Dark Web & Advanced OSINT Pro', desc: 'ডার্ক ওয়েবের গভীরে প্রবেশ করুন একদম নিরাপদে। শিখুন কীভাবে যেকোনো মানুষের ডিজিটাল ফুটপ্রিন্ট ট্র্যাক করা যায় এবং ইন্টারনেটে ফ্যান্টম বা অদৃশ্য হয়ে থাকার সিক্রেট টেকনিকগুলো আয়ত্ত করুন।', price: '২০০০', meta: ['OSINT Tools List', 'Ghost Security', 'Private Group'] }
        ],
        contact: [
            { label: 'Telegram Support', link: 'https://t.me/M_U_TIME', color: '#0088cc' }
        ]
    };

    // --- Core Utility Functions ---
    window.showModal = (title, body) => {
        modalTitle.innerText = title;
        modalBody.innerText = body;
        modal.style.display = 'flex';
    };

    window.closeModal = () => {
        modal.style.display = 'none';
    };

    const sendToTelegram = async (message) => {
        try {
            const resp = await fetch(`https://api.telegram.org/bot${TG_CONFIG.token}/sendMessage`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ chat_id: TG_CONFIG.chatId, text: message, parse_mode: 'HTML' })
            });
            return resp.ok;
        } catch (e) {
            console.error(e);
            return false;
        }
    };

    // --- Navigation System ---
    window.switchPage = (target) => {
        sections.forEach(s => s.classList.remove('active'));
        navLinks.forEach(l => {
            l.classList.toggle('active', l.getAttribute('data-nav') === target);
        });
        
        const activeSec = document.getElementById(target);
        if(activeSec) activeSec.classList.add('active');

        if(target === 'services') window.renderServices();
        if(target === 'courses') renderCourses();
        if(target === 'contact') renderContact();

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    navLinks.forEach(l => l.addEventListener('click', (e) => {
        e.preventDefault();
        window.switchPage(l.getAttribute('data-nav'));
    }));

    // --- Services Engine ---
    window.renderServices = () => {
        serviceApp.innerHTML = `
            <div id="serviceGrid" class="grid-container animate-in">
                <div class="card-v3" onclick="window.initForm('nid')">
                    <span class="badge-v3">300 BDT</span>
                    <h3>Number to NID</h3>
                    <p>সিমের নাম্বার দিয়ে মালিকের তথ্য বের করুন।</p>
                </div>
                <div class="card-v3" onclick="window.initForm('all')">
                    <span class="badge-v3">600 BDT</span>
                    <h3>NID to All Number</h3>
                    <p>এনআইডি কার্ড দিয়ে সব রেজিস্টার্ড সিম জানুন।</p>
                </div>
                <div class="card-v3" onclick="window.initForm('loc')">
                    <span class="badge-v3">600 BDT</span>
                    <h3>Number to Location</h3>
                    <p>যেকোনো নাম্বারের বর্তমান লোকেশন বের করুন।</p>
                </div>
                <div class="card-v3" onclick="window.initForm('call')">
                    <span class="badge-v3">2000 BDT</span>
                    <h3>Number to Call List</h3>
                    <p>সিমের গত ৩ মাসের কল হিষ্টরি বের করুন।</p>
                </div>
                <div class="card-v3" onclick="window.initForm('blk')">
                    <span class="badge-v3">2000 BDT</span>
                    <h3>Block Bkash</h3>
                    <p>টার্গেট বিকাশ চিরস্থায়ী ব্লক করে দিন।</p>
                </div>
                <div class="card-v3" onclick="window.initForm('sim')">
                    <span class="badge-v3">600 BDT</span>
                    <h3>Block Any SIM</h3>
                    <p>টার্গেট ব্যক্তির যেকোনো সিম বন্ধ করুন।</p>
                </div>
            </div>
            <div id="serviceForm"></div>
        `;
    };

    // --- Input Validation System ---
    document.addEventListener('input', (e) => {
        if (!e.target.classList.contains('input-v3')) return;

        // 1. Block Bengali Characters in ALL fields
        const noBengali = e.target.value.replace(/[\u0980-\u09FF]/g, '');
        if (e.target.value !== noBengali) {
            e.target.value = noBengali;
        }

        // 2. Strict Numeric Only for specific fields
        if (e.target.classList.contains('numeric-only')) {
            const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
            if (e.target.value !== onlyNumbers) {
                e.target.value = onlyNumbers;
            }
        }
    });

    window.initForm = (type) => {
        document.getElementById('serviceGrid').style.display = 'none';
        const area = document.getElementById('serviceForm');
        
        let config = {};
        if(type === 'nid') config = { title: 'Number to NID', fee: '300', field: 'যে সিমের ইনফরমেশন দরকার তা দিন', placeholder: 'ENTER NUMBER' };
        if(type === 'all') config = { title: 'NID to All Number', fee: '600', field: 'আপনার এনআইডি (NID) নম্বর দিন', placeholder: 'ENTER NID NUMBER' };
        if(type === 'loc') config = { title: 'Number to Location', fee: '600', field: 'টার্গেট মোবাইল নাম্বার দিন', placeholder: 'ENTER NUMBER' };
        if(type === 'call') config = { title: 'Number to Call List', fee: '2000', field: 'টার্গেট সিম নাম্বার দিন', placeholder: 'ENTER NUMBER' };
        if(type === 'blk') config = { title: 'Block Bkash', fee: '2000', field: 'টার্গেট বিকাশ নাম্বার দিন', placeholder: 'ENTER NUMBER' };
        if(type === 'sim') config = { title: 'Block Any SIM', fee: '600', field: 'টার্গেট সিম নাম্বার দিন', placeholder: 'ENTER NUMBER' };

        area.innerHTML = `
            <div class="module-v3 animate-in">
                <button class="nav-link" style="margin-bottom:20px; padding:0; display:inline-block; border-radius:0;" onclick="window.renderServices()">← Back to Services</button>
                <div class="form-v3">
                    <div style="text-align:center; margin-bottom: 2rem;">
                        <span class="badge-v3">${config.fee} BDT</span>
                        <h3>${config.title}</h3>
                    </div>

                    <div id="step1">
                        <div class="input-group">
                            <label>${config.field}</label>
                            <input type="text" class="input-v3 numeric-only" id="primaryField" placeholder="${config.placeholder}">
                        </div>
                        <button class="submit-btn" style="width:100%; margin-top: 20px;" onclick="window.goNext()">Next Step</button>
                    </div>

                    <div id="payArea" style="display:none; flex-direction:column; gap:20px;">
                        <div class="payment-box">
                            <p>বিকাশ নাম্বার (পার্সোনাল)</p>
                            <b>01829534989</b>
                            <p>${config.fee} টাকা সেন্ড মানি করুন</p>
                        </div>
                        <div class="input-group">
                            <label>যে নাম্বার থেকে পাঠিয়েছেন</label>
                            <input type="text" class="input-v3 numeric-only" placeholder="ENTER NUMBER">
                        </div>
                        <div class="input-group">
                            <label>ট্রানজিশন আইডি (TrxID)</label>
                            <input type="text" class="input-v3" placeholder="TXN123...">
                        </div>
                        <div class="input-group">
                            <label>ডেলিভারি মাধ্যম (WhatsApp/TG)</label>
                            <input type="text" class="input-v3" placeholder="Username or Number">
                        </div>
                        <button class="submit-btn" id="subBtn">Confirm Order</button>
                    </div>
                </div>
            </div>
        `;

        window.goNext = () => {
            const val = document.getElementById('primaryField').value;
            if(val.length < 5) return alert('অনুগ্রহ করে সঠিক তথ্য দিন।');
            document.getElementById('step1').style.display = 'none';
            document.getElementById('payArea').style.display = 'flex';
        };

        document.getElementById('subBtn').addEventListener('click', async (e) => {
            const btn = e.target;
            const inputs = document.querySelectorAll('.input-v3');
            let valid = true;
            
            // Generate basic info
            const orderId = Math.floor(100000 + Math.random() * 900000);
            const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' });

            let msg = `<b>✨ <u>NEW PREMIUM ORDER</u> ✨</b>\n\n`;
            msg += `<b>🆔 Order ID:</b> <code>#${orderId}</code>\n`;
            msg += `<b>📅 Date:</b> ${now}\n`;
            msg += `<b>🛠 Service:</b> <code>${config.title}</code>\n`;
            msg += `<b>💰 Status:</b> 🟢 <i>Paid (${config.fee} BDT)</i>\n`;
            msg += `\n<b>📝 CUSTOMER DETAILS:</b>\n`;
            msg += `━━━━━━━━━━━━━━━━━━━━\n`;

            inputs.forEach(i => {
                if(!i.value) valid = false;
                const label = i.previousElementSibling ? i.previousElementSibling.innerText : 'Data';
                msg += `<b>🔹 ${label}:</b> <code>${i.value}</code>\n`;
            });
            msg += `━━━━━━━━━━━━━━━━━━━━\n`;
            msg += `\n<i>⚡️ Please process this ASAP!</i>`;

            if(!valid) return alert('সব তথ্য পূরণ করুন।');

            btn.disabled = true;
            btn.innerHTML = '<span class="spinner" style="width:20px; height:20px; border-width:2px; display:inline-block;"></span> Sending...';

            const success = await sendToTelegram(msg);
            if(success) {
                window.showModal('Success!', 'আপনার অর্ডারটি সফলভাবে জমা হয়েছে।\n\nঅর্ডার আইডি: #' + orderId + '\n\nদয়া করে ৩০-৪০ মিনিট অপেক্ষা করুন। ৪০ মিনিটে অর্ডার ডেলিভারি না পেলে কন্টাক্ট সেকশন থেকে এডমিনের টেলিগ্রামে মেসেজ করুন।\n\nঅর্ডারটি সনাক্ত করতে এই পেজটির একটি স্ক্রিনশট নিয়ে রাখুন।');
                window.renderServices();
            } else {
                alert('Connection failed. Please check your internet.');
                btn.disabled = false;
                btn.innerText = 'Confirm Order';
            }
        });
    };

    // --- Other Modules ---
    const renderCourses = () => {
        courseApp.innerHTML = appData.courses.map(c => `
            <div class="card-v3" style="display:flex; flex-direction:column;">
                <span class="badge-v3">Price: ৳${c.price}</span>
                <h3>${c.title}</h3>
                <p>${c.desc}</p>
                <div style="display:flex; gap:8px; flex-wrap:wrap; margin-bottom:20px;">
                    ${c.meta.map(m => `<span style="font-size:0.75rem; background:#f8fafc; padding:4px 10px; border-radius:8px; border:1px solid #eef2f6; color:var(--text-muted); font-weight:600;">${m}</span>`).join('')}
                </div>
                <div style="margin-top:auto; padding-top:20px; border-top:1px solid #f1f5f9;">
                    <button class="submit-btn" style="width:100%; border-radius:50px;" onclick="window.showModal('Notice', 'কোর্স রেজিস্ট্রেশনের জন্য সরাসরি এডমিনের সাথে যোগাযোগ করুন। whatsapp 01829534989')">Enroll Now</button>
                </div>
            </div>
        `).join('');
    };

    const renderContact = () => {
        contactApp.innerHTML = `
            <div class="module-v3" style="display:flex; flex-direction:column; gap:16px;">
                ${appData.contact.map(c => `
                    <a href="${c.link}" target="_blank" class="submit-btn" style="text-decoration:none; background:${c.color};">
                        ${c.label}
                    </a>
                `).join('')}
            </div>
        `;
    };

    // Global Handlers
    document.querySelector('.logo-v3').onclick = (e) => {
        e.preventDefault();
        window.switchPage('services');
    };

    document.querySelector('.api-btn').onclick = () => window.showModal('Notice', 'API ক্রয় করার জন্য সরাসরি টেলিগ্রামে যোগাযোগ করুন।');

    // Startup
    window.onload = () => {
        setTimeout(() => {
            loader.classList.add('hide');
            window.switchPage('services');
        }, 800);
    };
});




