# Blain Türkiye Website Technical Claims Audit Report
**Date:** August 27, 2026  
**Scope:** Complete technical claim verification across all source files

---

## CRITICAL FINDINGS

### 1. FOUNDING YEAR DISCREPANCY
**Severity:** HIGH  
**Issue:** Conflicting founding dates across multiple files

**Locations:**
- `src/components/home/TrustStrip.tsx` (Line 4): "1960" - "Kuruluş yılı"
- `src/components/home/StoryIntro.tsx` (Line 37): "1960'tan bu yana"
- `src/app/layout.tsx` (Line 59): "1960'tan bu yana"
- `src/app/about-us/page.tsx` (Lines 126, 156, 322): **1971** "1971'den" / "1971'den bu yana"

**Master Data Source:**
- `src/data/ecosystemProducts.ts` (Lines 47, 48): "50 yılı aşkın süredir" - This aligns with 1971 (53 years from 2024), NOT 1960 (64 years)

**Verdict:** Fabricated/Inconsistent claim
**Root Cause:** Three files claim 1960, but the about-us page clearly states 1971 as the founding year. The "50+ years" language supports 1971.

**Suggested Correction:**
- Update `TrustStrip.tsx` Line 4: Change "1960" to "1971"
- Update `StoryIntro.tsx` Line 37: Change "1960'tan bu yana" to "1971'den bu yana"
- Update `layout.tsx` Line 59: Change "1960'tan bu yana" to "1971'den bu yana"

---

### 2. UNVERIFIED PRODUCTION VOLUME CLAIM
**Severity:** MEDIUM  
**Issue:** Claim not sourced from master technical data

**Location:**
- `src/app/about-us/page.tsx` (Line 160):
  > "Her yıl, Blain Hydraulics'in olağanüstü kalitesine ve güvenilirliğine inanan müşteriler tarafından yaklaşık on dört bin EV 100 valf satın alınmaktadır."
  
  Translation: "Every year, approximately 14,000 EV 100 valves are purchased by customers who trust Blain Hydraulics' extraordinary quality and reliability."

**Master Data:** 
- This specific claim (14,000 units annually) is NOT mentioned in `ecosystemProducts.ts` and cannot be verified

**Verdict:** UNVERIFIED MARKETING CLAIM
**Category:** Performance/market claim not in technical specification data

**Suggested Action:** Either:
1. Add documentation/citation for this claim, or
2. Remove or rephrase to "thousands of" instead of specific "14,000" figure

---

### 3. MATERIAL HARDNESS CLAIM - SOURCE MISMATCH
**Severity:** MEDIUM  
**Issue:** Technical specification claimed without source verification

**Location:**
- `src/components/home/story.ts` (Line 43-44):
  > "70 HRc sertliğinde işlenmiş iç yüzeyler ve kendi kendini temizleyen kademeli filtreler"
  
  "70 HRc hardness processed inner surfaces AND self-cleaning layered filters"
  - Metric: "70 HRc" - "işlenmiş iç yüzey sertliği" (processed inner surface hardness)

**Master Data Search:** 
- `ecosystemProducts.ts`: NO mention of 70 HRc hardness specification anywhere
- The claim appears as a standalone metric without any supporting product data

**Verdict:** UNVERIFIED TECHNICAL SPECIFICATION
**Status:** Not sourced from master technical data

**Suggested Action:**
- If legitimate, add to master data with proper sourcing
- If not verified, remove from story chapter metric

---

### 4. SELF-CLEANING FILTER CLAIM - INCORRECT PRODUCT ATTRIBUTION
**Severity:** MEDIUM  
**Issue:** Feature attributed to wrong product series

**Location:**
- `src/components/home/story.ts` (Line 43):
  > "kendi kendini temizleyen kademeli filtreler" (self-cleaning layered filters)
  
  This appears as a durability claim for what seems to be the EV100 series

**Master Data:**
- `ecosystemProducts.ts` (Line 101 - SEV product only):
  > "SEV valfi, hidrolik sistemin temizliğini ve uzun ömürlülüğünü destekleyen kendi kendini temizleyen pilot ve ana hat filtreleri içerir."
  
  "Self-cleaning pilot and main line filters" is ONLY mentioned for SEV product, NOT EV100

**Verdict:** PRODUCT FEATURE MISATTRIBUTION
**Impact:** Story chapter implies EV100 has this feature, but it's only confirmed for SEV

**Suggested Correction:**
- Clarify that self-cleaning filters are a SEV feature
- Either update story.ts or provide separate technical documentation for EV100 durability features

---

### 5. FLOOR LEVEL TOLERANCE CLAIM - UNVERIFIED
**Severity:** MEDIUM  
**Issue:** Technical specification not found in master data

**Location:**
- `src/components/home/story.ts` (Line 34, Metric):
  > "±3 mm" - "kat hizalama toleransı" (floor level tolerance)

**Master Data Search:**
- `ecosystemProducts.ts`: NO mention of ±3mm tolerance
- No technical specification document contains this specific tolerance value

**Verdict:** UNVERIFIED SPECIFICATION
**Status:** Not sourced from master data

**Related Claims:**
- `src/data/ecosystemProducts.ts` (Line 105 - MD/Micro Drive):
  > "MD motoru, kabini kat hizasında ±5 mm hassasiyetle konumlandırır"
  
  This shows ±5mm for the separate Micro Levelling Drive (MD), NOT ±3mm for EV100

**Suggested Correction:**
- Change ±3mm to ±5mm if referring to the MD seviyeleme motoru, OR
- Provide documentation for the ±3mm tolerance if it's valid for EV100
- Clarify which product the metric applies to

---

### 6. EV4 vs EV40 NAMING INCONSISTENCY
**Severity:** LOW  
**Issue:** Product naming inconsistency across timeline

**Location 1:**
- `src/app/about-us/page.tsx` (Line 342):
  > "EV4 - VVVF Kontrol Valfi"
  > Timeline year: "2001-2010"
  
**Location 2:**
- `src/app/modernization/page.tsx` (Multiple lines): "EV40"
- `src/data/ecosystemProducts.ts` (Line 84): "EV40"

**Question:** Are EV4 and EV40 the same product or different products?

**Master Data:** 
- ecosystemProducts.ts only lists "EV40"
- Suggests EV4 may be the older name that was updated to EV40

**Verdict:** POTENTIAL NAMING ISSUE
**Recommendation:** Clarify timeline:
- Was EV4 (2001-2010) renamed to EV40 at some point?
- Or are they different product generations?

---

### 7. VVVF DRIVER COMPATIBILITY EXPANSION
**Severity:** LOW  
**Issue:** Additional compatibility claim not in master data

**Location:**
- `src/app/modernization/page.tsx` (Line 149):
  > "EV40 sistemi, yukarı yöndeki seyir için Yaskawa'nın L1000H veya GA700 VVVF sürücüsü ile kusursuz bir şekilde entegre olur."
  
  "EV40 system integrates seamlessly with Yaskawa's L1000H OR GA700 VVVF driver"

**Master Data:**
- `ecosystemProducts.ts` (Line 87):
  > "Yaskawa L1000H inverter sürücüsü ile entegre çalışan"
  
  Only mentions: "Yaskawa L1000H inverter driver"

**Verdict:** EXPANDED COMPATIBILITY CLAIM
- GA700 compatibility is NOT mentioned in master data
- Represents addition of new technical claim outside master documentation

**Suggested Action:**
- Add GA700 compatibility to master data if verified, OR
- Remove GA700 from modernization page

---

### 8. RETROFIT TIME CLAIM - UNVERIFIED
**Severity:** MEDIUM  
**Issue:** Specific performance claim not in master data

**Location:**
- `src/app/modernization/page.tsx` (Line 155):
  > "bir eklenti (retrofit) kiti kullanılarak 10 dakikadan daha kısa bir sürede EV40'a yükseltilebilir"
  
  "Can be upgraded to EV40 in less than 10 minutes using a retrofit kit"

**Master Data:**
- `ecosystemProducts.ts`: NO mention of retrofit time, retrofit kits, or 10-minute upgrade capability

**Verdict:** UNVERIFIED PERFORMANCE CLAIM
**Status:** Not sourced from master data
**Category:** Installation/service claim requiring verification

**Suggested Action:**
- Provide documentation supporting the "10 minutes" claim, OR
- Remove specific time claim and use more general language like "quick retrofit upgrade"

---

### 9. ENERGY EFFICIENCY PERCENTAGE INCONSISTENCY
**Severity:** LOW  
**Issue:** Different percentages used in different contexts for same product

**Location 1 - Description:**
- `src/data/ecosystemProducts.ts` (Line 86):
  > "enerji tasarrufu sağlar" - "%60'a varan enerji tasarrufu"
  
  "Provides up to 60% energy savings"

**Location 2 - Long Description:**
- `src/data/ecosystemProducts.ts` (Line 87):
  > "%65'e kadar daha az enerji harcar"
  
  "Consumes up to 65% less energy"

**Location 3 - Modernization Page:**
- `src/app/modernization/page.tsx` (Line 143):
  > "enerji tüketimini %65'e kadar azaltabilir"
  
  "Can reduce energy consumption by up to 65%"

**Analysis:**
- Short description says "up to 60%"
- Long description says "up to 65%"
- Both are technically in master data, but modernization page only uses 65%

**Verdict:** INCONSISTENT BUT SOURCED
**Status:** Both figures exist in master data (60% in description, 65% in longDescription)
**Recommendation:** Decide on one authoritative figure and use consistently across all materials

---

## SUMMARY OF FINDINGS

### By Severity:

**CRITICAL (Changes Required):**
1. Founding year (1960 vs 1971) - Multiple file conflicts

**HIGH (Unverified/Unsourced):**
2. 14,000 units annual production claim - Not in master data
3. 70 HRc hardness specification - Not in master data
4. Self-cleaning filter attribution - Wrong product (EV100 vs SEV)
5. ±3mm tolerance claim - Not in master data
6. Retrofit 10-minute claim - Not in master data

**MEDIUM (Clarification Needed):**
7. EV4 vs EV40 naming
8. GA700 driver compatibility (only L1000H in master)

**LOW (Consistency Issues):**
9. Energy savings percentage (60% vs 65%)

---

## FILES AFFECTED

### High Priority Files to Review:
1. `src/components/home/TrustStrip.tsx` - Founding year error
2. `src/components/home/StoryIntro.tsx` - Founding year error
3. `src/app/layout.tsx` - Founding year error
4. `src/components/home/story.ts` - Material specs and tolerances
5. `src/app/about-us/page.tsx` - Unverified production volume
6. `src/app/modernization/page.tsx` - Multiple unverified technical claims

### Master Data File:
- `src/data/ecosystemProducts.ts` - Reference source for all product specifications

---

## RECOMMENDATIONS

1. **Immediate:** Fix founding year across all files (1960→1971)
2. **High Priority:** Document or remove unsourced claims (14,000 units, 70 HRc, ±3mm, 10-min retrofit)
3. **Medium Priority:** Clarify product feature attribution (self-cleaning filters), resolve EV4/EV40 naming
4. **Ongoing:** Ensure all website claims are cross-referenced with `ecosystemProducts.ts` before publication
5. **Process:** Implement pre-publication verification against master data for all marketing copy

---

## VERIFICATION CHECKLIST

- [x] Master technical data reviewed
- [x] All web pages scanned for claims
- [x] Claims cross-referenced with source data
- [x] Inconsistencies documented
- [x] Unverified claims identified
- [ ] Corrections implemented (pending)
- [ ] Verification tests added (recommended)

