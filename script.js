const menuBtn = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuBtn && siteNav) {
  menuBtn.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });
}

const servicesData = {
  'gst-registration': {
    title: 'GST Registration',
    category: 'Registration Service',
    intro: 'Comprehensive GST registration support for businesses, proprietors and service providers requiring GSTIN.',
    price: '₹1,499',
    days: '3-5 business days',
    bestFor: 'New businesses crossing GST thresholds',
    benefits: [
      'End-to-end application support and form validation.',
      'Guidance on selecting business category and tax profile.',
      'Assistance for ARN tracking and query responses.'
    ],
    docs: ['PAN and Aadhaar of promoter', 'Business address proof', 'Bank account details', 'Business constitution proof'],
    process: ['Requirement call and eligibility check', 'Document collection and review', 'Application filing', 'ARN follow-up and GSTIN confirmation'],
    related: ['gst-return-filing', 'msme-registration', 'accounting-bookkeeping']
  },
  'gst-return-filing': {
    title: 'GST Return Filing',
    category: 'Tax Service',
    intro: 'Accurate GST return preparation and filing with purchase-sales reconciliation support.',
    price: '₹1,299',
    days: '2-3 business days',
    bestFor: 'Regular GST-registered businesses',
    benefits: ['Timely filing support with compliance reminders.', 'Input credit reconciliation assistance.', 'Error-checking before submission.'],
    docs: ['Sales invoices', 'Purchase invoices', 'Previous return references', 'GST portal credentials'],
    process: ['Data review', 'Reconciliation', 'Return draft confirmation', 'Final filing and acknowledgement'],
    related: ['gst-registration', 'tds-tcs-filing', 'accounting-bookkeeping']
  },
  'itr-filing': {
    title: 'ITR Filing',
    category: 'Tax Service',
    intro: 'Income tax return filing for individuals, professionals and small businesses with proper deduction checks.',
    price: '₹999',
    days: '2-4 business days',
    bestFor: 'Salaried individuals, consultants and proprietors',
    benefits: ['Correct ITR form selection and tax summary.', 'Deduction optimization guidance.', 'Post-filing acknowledgement support.'],
    docs: ['PAN and Aadhaar', 'Form 16 / financial statements', 'Bank interest/TDS details', 'Investment proofs'],
    process: ['Profile assessment', 'Income and deduction compilation', 'Return preparation and review', 'Submission and verification'],
    related: ['tds-tcs-filing', 'gst-return-filing', 'accounting-bookkeeping']
  },
  'tds-tcs-filing': {
    title: 'TDS / TCS Filing',
    category: 'Tax Service',
    intro: 'Quarterly TDS/TCS filing with challan verification and filing support.',
    price: '₹1,799',
    days: '3-5 business days',
    bestFor: 'Businesses with TDS/TCS deduction obligations',
    benefits: ['Quarter-wise compliance management.', 'Mismatch minimization support.', 'Timely filing coordination.'],
    docs: ['Deductor TAN details', 'Deduction records', 'Challan details', 'Previous filing data'],
    process: ['Data validation', 'Return preparation', 'Client review', 'Submission and acknowledgement'],
    related: ['itr-filing', 'gst-return-filing', 'accounting-bookkeeping']
  },
  'msme-registration': {
    title: 'MSME Registration',
    category: 'Registration Service',
    intro: 'Udyam registration support to help eligible businesses access benefits and schemes.',
    price: '₹899',
    days: '1-2 business days',
    bestFor: 'Micro, small and medium enterprises',
    benefits: ['Fast registration process guidance.', 'Activity and category mapping help.', 'Document checklist for smooth submission.'],
    docs: ['Aadhaar of proprietor/director', 'PAN details', 'Business activity details', 'Bank account details'],
    process: ['Eligibility check', 'Data collection', 'Udyam portal submission', 'Certificate confirmation'],
    related: ['gst-registration', 'company-registration', 'accounting-bookkeeping']
  },
  'company-registration': {
    title: 'Company Registration',
    category: 'Registration Service',
    intro: 'Private limited company incorporation with coordinated document filing and approvals support.',
    price: '₹7,999',
    days: '7-12 business days',
    bestFor: 'Founders launching scalable ventures',
    benefits: ['Name reservation and incorporation filing support.', 'MOA/AOA process guidance.', 'Structured onboarding checklist.'],
    docs: ['Directors PAN & Aadhaar', 'Address proofs', 'Passport size photos', 'Registered office proof'],
    process: ['Planning and name options', 'DSC/DIN and documentation', 'MCA filing workflow', 'Certificate and initial compliance handover'],
    related: ['msme-registration', 'gst-registration', 'accounting-bookkeeping']
  },
  'accounting-bookkeeping': {
    title: 'Accounting & Bookkeeping',
    category: 'Accounting Service',
    intro: 'Ongoing monthly bookkeeping to keep your finances organized, reconciled and reporting-ready.',
    price: '₹2,499/month',
    days: 'Monthly cycle',
    bestFor: 'Growing businesses needing regular accounting support',
    benefits: ['Monthly transaction posting and reconciliation.', 'Ledger and balance review support.', 'Management-ready summary reports.'],
    docs: ['Bank statements', 'Invoices and bills', 'Expense proofs', 'Previous accounting data'],
    process: ['Onboarding and data handover', 'Monthly posting and reconciliation', 'Review and corrections', 'Periodic report sharing'],
    related: ['gst-return-filing', 'tds-tcs-filing', 'itr-filing']
  }
};

function renderServiceDetail() {
  const titleNode = document.getElementById('detail-title');
  if (!titleNode) return;

  const params = new URLSearchParams(window.location.search);
  const key = params.get('service') || 'gst-registration';
  const service = servicesData[key] || servicesData['gst-registration'];

  document.title = `${service.title} | TrustEdge Services`;
  document.getElementById('detail-category').textContent = service.category;
  titleNode.textContent = service.title;
  document.getElementById('detail-intro').textContent = service.intro;
  document.getElementById('detail-price').textContent = service.price;
  document.getElementById('detail-days').textContent = service.days;
  document.getElementById('detail-for').textContent = service.bestFor;

  const benefitsEl = document.getElementById('detail-benefits');
  benefitsEl.innerHTML = service.benefits.map(item => `<li>${item}</li>`).join('');

  const docsEl = document.getElementById('detail-docs');
  docsEl.innerHTML = service.docs.map(item => `<li>${item}</li>`).join('');

  const processEl = document.getElementById('detail-process');
  processEl.innerHTML = service.process.map(item => `<li>${item}</li>`).join('');

  const relatedEl = document.getElementById('detail-related');
  relatedEl.innerHTML = service.related
    .map(relatedKey => {
      const related = servicesData[relatedKey];
      return `<article class="service-card"><h3>${related.title}</h3><p>${related.intro}</p><div class="meta"><span>From ${related.price}</span><span>${related.days}</span></div><a href="service-detail.html?service=${relatedKey}">View Details</a></article>`;
    })
    .join('');
}

renderServiceDetail();
