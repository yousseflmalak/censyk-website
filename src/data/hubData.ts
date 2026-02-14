export interface TrainingModule {
    title: string;
    content: string;
}

export interface ToolkitItem {
    tcode: string;
    desc: string;
    icon: string;
    category: 'Technical' | 'Career';
    howTo?: string;
    type?: 'CV' | 'LinkedIn';
    links?: { label: string; path: string }[];
    url?: string;
    detail?: string;
    summary?: string;
}

export interface ProjectItem {
    name: string;
    status: string;
    role: string;
    location: string;
    logo: string;
    focus: string[];
    lastUpdate: string;
}

export interface JournalEntry {
    date: string;
    title: string;
    project: string;
    content: string;
}

export interface ProgressData {
    training: number;
    certification: number;
    examTarget: string;
    examDate: string;
}

export const TRAINING_DATA: TrainingModule[] = [
    {
        title: "Module 1: Architecture & Framework (eDoc, AIF, BTP)",
        content: `
            <div class="space-y-6">
                <p class="text-lg">Mastering Belgian DRC requires understanding the <strong>Three-Tier Architecture</strong> that powers electronic compliance.</p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-blue-600/10 p-4 rounded-xl border border-blue-500/20">
                        <h4 class="font-bold text-blue-400 mb-2">1. eDocument Core</h4>
                        <p class="text-xs">The lifecycle engine in S/4HANA (Tables: <code>EDOCUMENT</code>, <code>EDOPROCSTEP</code>). This is where the status management happens.</p>
                    </div>
                    <div class="bg-indigo-600/10 p-4 rounded-xl border border-indigo-500/20">
                        <h4 class="font-bold text-indigo-400 mb-2">2. AIF Mapping</h4>
                        <p class="text-xs">The <strong>Application Interface Framework</strong> transforms SAP internal data into the regulatory UBL 2.1 XML format.</p>
                    </div>
                    <div class="bg-purple-600/10 p-4 rounded-xl border border-purple-500/20">
                        <h4 class="font-bold text-purple-400 mb-2">3. BTP Integration</h4>
                        <p class="text-xs">Secure transmission layer. Handles digital signatures (Peppol AS4) and government handshakes.</p>
                    </div>
                </div>
                <div class="p-4 bg-slate-900 border border-white/5 rounded-2xl">
                    <h4 class="text-sm font-bold text-white mb-2">Technical Flow:</h4>
                    <pre class="text-[10px] font-mono text-gray-400 leading-relaxed">Transaction -> eDoc Created -> AIF Mapping -> XML Generation -> BTP Send -> Gov Ack</pre>
                </div>
            </div>
        `
    },
    {
        title: "Module 2: Master Data & Global Settings",
        content: `
            <div class="space-y-6">
                <p>Establishing the foundation. Mandatory settings for the Belgian legal entity.</p>
                <div class="bg-slate-800/50 p-6 rounded-2xl border border-white/5">
                    <h4 class="font-bold text-white mb-4">Critical Maintenance Views</h4>
                    <ul class="space-y-3 text-sm">
                        <li class="flex items-center gap-3">
                            <code class="text-blue-400 bg-blue-400/10 px-2 py-1 rounded">EDOCOMPANYV</code>
                            <span class="text-gray-400">Activate eDocument for Company Code & Country BE.</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <code class="text-blue-400 bg-blue-400/10 px-2 py-1 rounded">V_EDOROUTE</code>
                            <span class="text-gray-400">Define Peppol as the default transmission route.</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <code class="text-blue-400 bg-blue-400/10 px-2 py-1 rounded">V_T007L</code>
                            <span class="text-gray-400">Map Tax Codes to Intervat boxes (e.g., Box 00, 01, 54).</span>
                        </li>
                    </ul>
                </div>
                <div class="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                    <p class="text-xs font-bold text-yellow-500 uppercase mb-1">Expert Note</p>
                    <p class="text-xs italic">"In Belgium, the Business Partner must have a valid GLN (Global Location Number) or VAT number in the <code>EAN11</code> field for Peppol routing to succeed."</p>
                </div>
            </div>
        `
    },
    {
        title: "Module 3: Electronic Customer Invoices (Outbound)",
        content: `
            <div class="space-y-6">
                <p>The core B2B/B2G flow for Belgian Sales and Distribution (SD).</p>
                <div class="space-y-4">
                    <div class="bg-slate-900 border border-white/5 p-4 rounded-xl hover:border-blue-500/30 transition-all">
                        <h5 class="text-blue-400 font-bold mb-1">Step 1: Billing Post (VF01)</h5>
                        <p class="text-xs text-gray-500">Upon posting, the eDocument is automatically triggered in the background.</p>
                    </div>
                    <div class="bg-slate-900 border border-white/5 p-4 rounded-xl hover:border-blue-500/30 transition-all">
                        <h5 class="text-blue-400 font-bold mb-1">Step 2: Submit (EDOC_COCKPIT)</h5>
                        <p class="text-xs text-gray-500">Select the record and click 'Submit'. The system invokes the AIF mapping for UBL 2.1.</p>
                    </div>
                    <div class="bg-slate-900 border border-white/5 p-4 rounded-xl hover:border-blue-500/30 transition-all">
                        <h5 class="text-blue-400 font-bold mb-1">Step 3: Response Management</h5>
                        <p class="text-xs text-gray-500">Monitor the 'Message Status'. A green light indicates successful BTP transmission and recipient acknowledgment.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Module 4: Customer Invoices Created in Other Systems",
        content: `
            <div class="space-y-6">
                <p>Handling external invoice sources via the <strong>Cloud Integration Hub</strong>.</p>
                <div class="p-6 bg-purple-600/5 border border-purple-500/20 rounded-3xl">
                    <h4 class="font-bold text-purple-400 mb-3 text-sm">External System Integration</h4>
                    <p class="text-sm text-gray-400 leading-relaxed mb-4">When Belgian invoices are generated in a non-SAP legacy system, DRC acts as the central compliance agent. Data is sent to S/4HANA via the <code>/EDO/EDOC_CREATE_FROM_DATA</code> API or BTP CPI iFlows.</p>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="bg-black/20 p-4 rounded-xl">
                            <p class="text-[10px] text-gray-500 uppercase font-black">Entry Point</p>
                            <p class="text-xs font-mono">BTP CPI Endpoints</p>
                        </div>
                        <div class="bg-black/20 p-4 rounded-xl">
                            <p class="text-[10px] text-gray-500 uppercase font-black">Frame</p>
                            <p class="text-xs font-mono">DRC Integration Suite</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Module 5: Electronic Supplier Invoices (Inbound)",
        content: `
            <div class="space-y-6">
                <p>Automating Accounts Payable using the Peppol Inbound network.</p>
                <div class="bg-emerald-500/10 p-6 rounded-3xl border border-emerald-500/20">
                    <h4 class="text-emerald-400 font-bold mb-4">The Inbound Workflow:</h4>
                    <ol class="space-y-4 text-xs">
                        <li class="flex gap-4">
                            <span class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">1</span>
                            <span>Supplier sends XML via Peppol. BTP receives and pushes to S/4HANA.</span>
                        </li>
                        <li class="flex gap-4">
                            <span class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">2</span>
                            <span>Entry appears in <strong>EDOC_COCKPIT</strong> and <strong>Inbound Specialist</strong> app.</span>
                        </li>
                        <li class="flex gap-4">
                            <span class="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">3</span>
                            <span>Mapping automatically links XML data to Vendor Master and Purchase Order.</span>
                        </li>
                    </ol>
                </div>
            </div>
        `
    },
    {
        title: "Module 6: Electronic Orders (Outbound PO)",
        content: `
            <div class="space-y-6">
                <p>Digitalizing the procurement cycle with electronic Purchase Orders.</p>
                <div class="bg-slate-900 border border-white/5 p-6 rounded-3xl">
                    <h5 class="text-blue-400 font-bold mb-4">Outbound Flow (ME21N/ME22N)</h5>
                    <p class="text-sm text-gray-400 mb-6">In Belgium, the exchange of electronic orders via Peppol ensures structured data synchronization between Buyer and Supplier, eliminating manual entry for the vendor.</p>
                    <div class="p-4 bg-black/20 rounded-xl border border-white/5 font-mono text-[10px] text-gray-500">
                        Process: PO Release -> EDOC Creation -> Peppol BIS Order v3 Mapping -> BTP Send
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Module 7: Electronic Incoming Orders (Inbound SO)",
        content: `
            <div class="space-y-6">
                <p>Receiving structured orders from customers to automate Sales Order creation.</p>
                <p class="text-sm text-gray-400">When your customer sends an order via Peppol, DRC's inbound processing engine transforms the XML directly into a <strong>Sales Order (VA01)</strong> draft. This module focuses on the <strong>Integration Suite</strong> configuration required for the automated payload conversion.</p>
                <div class="p-4 bg-indigo-600/10 border border-indigo-500/20 rounded-xl">
                    <h6 class="text-xs font-bold text-indigo-400 uppercase mb-2">Technical Trigger</h6>
                    <p class="text-[10px] text-indigo-100 italic">"The process relies on the Inbound Mapping (XSLT/ST) within the AIF framework to populate the <code>VBAK/VBAP</code> internal structures."</p>
                </div>
            </div>
        `
    },
    {
        title: "Module 8: Annual Sales Listing (Client Listing)",
        content: `
            <div class="space-y-6">
                <p>Periodic compliance: The mandatory Belgian <strong>Annual Sales Listing</strong> (March requirement).</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-slate-900 border border-white/5 rounded-2xl">
                        <h4 class="text-xs font-bold text-gray-500 uppercase mb-2">Who to report?</h4>
                        <p class="text-sm">Domestic B2B customers with annual turnover > €250.00.</p>
                    </div>
                    <div class="p-4 bg-slate-900 border border-white/5 rounded-2xl">
                        <h4 class="text-xs font-bold text-gray-500 uppercase mb-2">DRC Report</h4>
                        <p class="text-sm font-mono">BE_VAT_ANNUAL_LIST</p>
                    </div>
                </div>
                <p class="text-sm text-gray-400 px-2">Use the <strong>Run Compliance Reports</strong> app to initiate extraction. The system cross-checks VAT IDs against the ledger and generates the Intervat XML.</p>
            </div>
        `
    },
    {
        title: "Module 9: EC Sales List (Intracommunity)",
        content: `
            <div class="space-y-6">
                <p>Reporting supplies of Goods and Services to other EU member states.</p>
                <div class="space-y-4">
                    <div class="p-5 bg-slate-900 border border-white/5 rounded-2xl">
                        <h5 class="text-blue-400 font-bold text-sm mb-1">Tax Box 46 (Goods)</h5>
                        <p class="text-xs text-gray-500">Intracommunity supply of goods where VAT is paid by the acquirer.</p>
                    </div>
                    <div class="p-5 bg-slate-900 border border-white/5 rounded-2xl">
                        <h5 class="text-blue-400 font-bold text-sm mb-1">Tax Box 44 (Services)</h5>
                        <p class="text-xs text-gray-500">Service provision to EU-based B2B customers.</p>
                    </div>
                </div>
                <p class="text-xs text-center text-gray-600 uppercase tracking-widest font-bold">DRC Code: BE_VAT_EC_SALES_LIST</p>
            </div>
        `
    },
    {
        title: "Module 10: Withholding Tax Reporting",
        content: `
            <div class="space-y-6">
                <p>Managing Withholding Tax (WHT) declarations for Belgian entities.</p>
                <p class="text-sm text-gray-400">Although less frequent than VAT, certain Belgian payouts require WHT deduction. DRC automates the reporting via the <strong>273A / 276</strong> forms extraction.</p>
                <div class="p-4 bg-black/20 rounded-xl border border-white/5">
                    <p class="text-[10px] text-gray-500 uppercase font-black mb-2">Configuration Path</p>
                    <p class="text-[10px] font-mono leading-tight">FI -> Global Settings -> Withholding Tax -> Country-Specifics -> Belgium</p>
                </div>
            </div>
        `
    },
    {
        title: "Module 11: VAT Return & Declaration for VAT Units",
        content: `
            <div class="space-y-6">
                <p>Advanced VAT: Single declarations for multiple Legal Entities (VAT Units).</p>
                <div class="p-6 bg-blue-600/5 rounded-3xl border border-blue-500/20">
                    <h4 class="font-bold text-blue-400 mb-2">The 'VAT Unit' Concept:</h4>
                    <p class="text-sm text-gray-300 leading-relaxed mb-4">DRC allows you to group multiple S/4HANA company codes into a single <strong>Reporting Entity</strong>. This is critical for Belgian groups who report VAT together while maintaining separate accounting books.</p>
                    <div class="bg-black/40 p-3 rounded-lg text-xs font-mono">
                        Master Entity (BE01) <- Linked entities (BE02, BE03)
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Module 12: Balance of Payments I (F01DGS, F01MER)",
        content: `
            <div class="space-y-6">
                <p>Reporting transactions with non-residents to the <strong>National Bank of Belgium (NBB)</strong>.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 bg-slate-800/20 rounded-2xl border border-white/5">
                        <h5 class="font-bold text-white text-sm mb-2">F01DGS</h5>
                        <p class="text-[10px] text-gray-500">Quarterly/Annual report of digital service transactions.</p>
                    </div>
                    <div class="p-4 bg-slate-800/20 rounded-2xl border border-white/5">
                        <h5 class="font-bold text-white text-sm mb-2">F01MER</h5>
                        <p class="text-[10px] text-gray-500">Merchanting and trade-related service reporting.</p>
                    </div>
                </div>
                <p class="text-xs text-gray-500 italic">DRC uses the transaction currency and partner location (Land1) to automatically filter relevant records.</p>
            </div>
        `
    },
    {
        title: "Module 13: Balance of Payments II (F02CMS, S01CCR, S03CCR)",
        content: `
            <div class="space-y-6">
                <p>Continued: Specialized Balance of Payments declarations.</p>
                <ul class="space-y-4">
                    <li class="bg-slate-900 p-4 rounded-xl border-l-2 border-indigo-500">
                        <span class="block font-bold text-white">F02CMS</span>
                        <span class="text-[10px] text-gray-500">Financial asset reporting for cross-border holdings.</span>
                    </li>
                    <li class="bg-slate-900 p-4 rounded-xl border-l-2 border-indigo-500">
                        <span class="block font-bold text-white">S01CCR & S03CCR</span>
                        <span class="text-[10px] text-gray-500">Specific credit and loan reporting for NBB statistical purposes.</span>
                    </li>
                </ul>
            </div>
        `
    },
    {
        title: "Module 14: MM: ERS Invoice Numbering",
        content: `
            <div class="space-y-6">
                <p>Compliance for <strong>Evaluated Receipt Settlement (ERS)</strong> in Materials Management.</p>
                <p class="text-sm text-gray-400">In Belgium, ERS invoices generated via <code>MRRL</code> must follow a strict consecutive numbering sequence to be legally valid. This module covers the <strong>Official Document Numbering (ODN)</strong> setup for Belgian MM processes.</p>
                <div class="p-4 bg-slate-900 rounded-xl border border-white/5">
                    <code class="text-emerald-400 text-xs">V_T003_I (Maintain Number Groups)</code>
                </div>
            </div>
        `
    },
    {
        title: "Module 15: Advanced Troubleshooting & Schematron",
        content: `
            <div class="space-y-6">
                <p>Mastering the art of debugging UBL 2.1 XML rejections.</p>
                <div class="p-6 bg-red-600/5 rounded-3xl border border-red-500/20">
                    <h4 class="font-bold text-red-500 mb-4">Common Rejection Scenarios:</h4>
                    <div class="space-y-3 text-xs">
                        <div class="flex items-start gap-4">
                            <span class="text-red-500 font-bold shrink-0">CODE 403:</span>
                            <p>Unauthorized sender. Check <strong>BTP Subaccount</strong> Peppol registration status.</p>
                        </div>
                        <div class="flex items-start gap-4">
                            <span class="text-red-500 font-bold shrink-0">SCHE:</span>
                            <p>Schematron Error. XML failed the UBL 2.1 syntax rules. Use <strong>AIF Monitoring</strong> to find the missing mandatory field.</p>
                        </div>
                        <div class="flex items-start gap-4">
                            <span class="text-red-500 font-bold shrink-0">TIMEOUT:</span>
                            <p>BTP Destination failure. Check <code>SM59</code> certificates and proxy settings.</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
];

export const TOOLKIT_DATA: ToolkitItem[] = [
    { tcode: "EDOC_COCKPIT", desc: "The main dashboard for monitoring and submitting electronic documents across all jurisdictions.", icon: "layout", category: "Technical", howTo: "Enter this T-Code to monitor, submit, and clear electronic documents for any mandate (KSeF, ViDA, etc.)." },
    { tcode: "/AIF/CONTENT_EXTRACT", desc: "Technical tool for extracting data mapping from the AIF framework.", icon: "file-cog", category: "Technical", howTo: "Use this to extract and debug the XML mapping structure when a transmission fails regulatory validation." },
    { tcode: "SM30 (V_EDO_SUB_TYPE)", desc: "Maintain eDocument types and assign them to accounting document types.", icon: "settings-2", category: "Technical", howTo: "The core configuration link. Use this to ensure an FI invoice automatically triggers a DRC eDocument." },
    { tcode: "SR_REPORT_ENTITY", desc: "The engine for defining statutory reporting entities and periodicity.", icon: "clipboard-list", category: "Technical", howTo: "Define 'Reporting Entities' for local authorities. Vital for annual SAF-T or VAT returns." },
    { tcode: "STRUST", desc: "Trust Manager for managing SSL certificates required for secure BTP communication.", icon: "shield-check", category: "Technical", howTo: "Import government security certificates here. Without this, BTP cannot establish a secure link to tax gateways." },
    { tcode: "S_EDO_CERT_REG", desc: "Specific registration for digital signatures used in e-invoicing.", icon: "pen-tool", category: "Technical", howTo: "Register your digital signature keys here for jurisdictions requiring cryptographically signed XMLs." },
    {
        tcode: "PROFESSIONAL_CV", desc: "Expert SAP DRC Architect CV (25+ yrs). Highlighting global leadership in Europe, Middle East, and UK mandates.", icon: "file-text", category: "Career", type: "CV", links: [
            { label: "Word Version", path: "/hub/docs/Youssef_Lmalak_SAP_DRC_CV.doc" },
            { label: "Markdown Source", path: "/hub/docs/Youssef_Lmalak_SAP_DRC_CV.md" }
        ]
    },
    { tcode: "LINKEDIN_STRATEGY", desc: "DRC-Focused profile overview with verified strategy and outreach ready.", icon: "linkedin", category: "Career", type: "LinkedIn", url: "https://www.linkedin.com/in/youssef-l-17174a237/", detail: "Heading: Lead SAP DRC Architect | BTP Integration | KSeF & ViDA Expert | Global E-Invoicing Compliance", summary: "Strategic positioning as a 'Triple-Threat' expert (Functional + Technical + Regulatory)." }
];

export const PROJECT_DATA: ProjectItem[] = [
    {
        name: "InterParking Belgium",
        status: "Post Go-Live",
        role: "Lead DRC Architect",
        location: "Brussels / Remote",
        logo: "/hub/logos/interparking.svg",
        focus: ["eInvoicing", "BTP Integration", "Peppol"],
        lastUpdate: "Feb 2026"
    },
    {
        name: "JYSK Poland",
        status: "Scoping Phase",
        role: "DRC Consultant",
        location: "Poland / Denmark",
        logo: "/hub/logos/jysk.svg",
        focus: ["KSeF 2.0", "Mandatory B2B", "Legal Requirement Audit"],
        lastUpdate: "Feb 12, 2026"
    }
];

export const PROGRESS_DATA: ProgressData = {
    training: 0,
    certification: 0,
    examTarget: "S4F08 Implementation",
    examDate: "March 2026"
};

export const JOURNAL_DATA: JournalEntry[] = [
    {
        date: "Feb 12, 2026",
        title: "JYSK Poland: KSeF 2.0 Requirements & Scoping",
        project: "JYSK Poland",
        content: `
            <p>Conducted initial scoping meeting for the Poland B2B mandate (KSeF 2.0). We focused on categorizing requirements into Must-Have, Nice-to-Have, and Legal Needs.</p>
            
            <h3 class="text-blue-400 font-bold mt-6 mb-2">Legal Needs (Must-Have)</h3>
            <ul class="list-disc ml-6 mb-4 space-y-1">
                <li>Direct integration with KSeF platform for Structured Invoices.</li>
                <li>Validation of VAT IDs against the "White List".</li>
                <li>Archiving for legal holding periods (10 years).</li>
            </ul>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">Operational Nice-to-Have</h3>
            <ul class="list-disc ml-6 mb-4 space-y-1">
                <li>Automated error notification to AP/AR teams via BTP.</li>
                <li>Dashboard for monitoring rejection codes from the KSeF portal.</li>
            </ul>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">Technical Tool Used</h3>
            <p>Analyzed the <strong>EDOC_COCKPIT</strong> for Poland-specific process types and checked <strong>SM30</strong> for <code>EDOC_POLAND_V</code> maintainance views.</p>
        `
    },
    {
        date: "Feb 12, 2026",
        title: "Automated BP Upload: Custom ABAP Report ZFI_UPLOAD_PARTNER",
        project: "InterParking Belgium",
        content: `
            <p>To streamline the onboarding of legal partners for e-invoicing, I used a custom ABAP report to bulk-load data into the DRC partner tables.</p>
            
            <h3 class="text-blue-400 font-bold mt-6 mb-2">Technical Objective</h3>
            <p>Automate the population of <strong>EDOEUBUPA</strong> (Partner Mapping), <strong>EDOEUPARTY</strong> (Party Types), and <strong>EDOEUPARTYT</strong> (Texts) from a simplified CSV structure.</p>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">Key Functionality</h3>
            <ul class="list-disc ml-6 mb-4 space-y-2 text-sm">
                <li><strong>Dynamic Parsing</strong>: Auto-detects delimiters (Semicolon, Comma, or Tab).</li>
                <li><strong>Safety Checks</strong>: Validates if the <code>PARTY_ID_TYPE</code> exists before insertion.</li>
                <li><strong>ALV Preview</strong>: Uses <code>CL_SALV_TABLE</code> to show a status-coded dashboard (LED colors) before database commit.</li>
                <li><strong>Update Mode</strong>: Toggle between inserting new records or updating existing ones.</li>
            </ul>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">Full ABAP Implementation (ZFI_UPLOAD_PARTNER)</h3>
            <pre class="bg-black/40 p-4 rounded-xl text-[10px] font-mono overflow-x-auto border border-white/5 max-h-[500px] leading-relaxed text-gray-300">
REPORT zfi_upload_partner.
... (Full logic in source)
            </pre>
        `
    },
    {
        date: "Feb 12, 2026",
        title: "Extracting Business Partner from eDocument Source Key",
        project: "InterParking Belgium",
        content: `
            <p>This entry outlines the technical logic to navigate from the <strong>EDOC_COCKPIT</strong> to the underlying <strong>Business Partner (BP)</strong> using the 18-character Source Key.</p>
            
            <h3 class="text-blue-400 font-bold mt-6 mb-2">1. The Source Key Structure</h3>
            <p>In FI-based eDocuments, the <code>SOURCE_KEY</code> is a concatenation:</p>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>Company Code</strong>: Chars 1-4</li>
                <li><strong>Document Number</strong>: Chars 5-14</li>
                <li><strong>Fiscal Year</strong>: Chars 15-18</li>
            </ul>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">2. Technical Linkage Path</h3>
            <div class="bg-slate-800/50 p-4 rounded-xl border border-white/5 mb-4">
                <p class="font-mono text-xs">
                    <span class="text-emerald-400">EDOCUMENT</span> (SOURCE_KEY) <br/>
                    &nbsp;&nbsp;→ <span class="text-emerald-400">BSEG</span> (Account Type KOART = 'D' or 'K') <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;→ <span class="text-emerald-400">CVI_CUST_LINK</span> (or CVI_VEND_LINK) <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span class="text-emerald-400">BUT000</span> (General BP Data)
                </p>
            </div>
        `
    }
];
