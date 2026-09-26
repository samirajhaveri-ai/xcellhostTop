import { AcronisMdrContentComponent } from '../sections/acronis-mdr-content.component';
import { AcronisMdrHeroComponent } from '../sections/acronis-mdr-hero.component';
import { Rtx8000PricingComponent } from '../sections/rtx-8000-pricing.component';
import { RtxPro6000PricingComponent } from '../sections/rtx-pro-6000-pricing.component';
import { Rtx6000AdaPricingComponent } from '../sections/rtx-6000-ada-pricing.component';
import { RtxA6000PricingComponent } from '../sections/rtx-a6000-pricing.component';
import { RtxPro6000DetailsComponent } from '../sections/rtx-pro-6000-details.component';
import { Rtx6000AdaDetailsComponent } from '../sections/rtx-6000-ada-details.component';
import { RtxA6000DetailsComponent } from '../sections/rtx-a6000-details.component';
import { Rtx8000DetailsComponent } from '../sections/rtx-8000-details.component';
import { Rtx8000SpecificationsComponent } from '../sections/rtx-8000-specifications.component';
import { RtxPro6000SpecificationsComponent } from '../sections/rtx-pro-6000-specifications.component';
import { Rtx6000AdaSpecificationsComponent } from '../sections/rtx-6000-ada-specifications.component';
import { RtxA6000PerformanceComponent } from '../sections/rtx-a6000-performance.component';
import { Rtx8000UseCasesComponent } from '../sections/rtx-8000-use-cases.component';
import { RtxPro6000ShowcaseComponent } from '../sections/rtx-pro-6000-showcase.component';
import { Rtx6000AdaShowcaseComponent } from '../sections/rtx-6000-ada-showcase.component';
import { Rtx8000StoriesComponent } from '../sections/rtx-8000-stories.component';
import { RtxPro6000HeroComponent } from '../sections/rtx-pro-6000-hero.component';
import { Rtx6000AdaHeroComponent } from '../sections/rtx-6000-ada-hero.component';
import { RtxA6000HeroComponent } from '../sections/rtx-a6000-hero.component';
import { EmailArchivingContentComponent } from '../sections/email-archiving-content.component';
import { CloudDevopsContentComponent } from '../sections/cloud-devops-content.component';
import { MicrosoftTrainingContentComponent } from '../sections/microsoft-training-content.component';
import { CopilotTrainingContentComponent } from '../sections/copilot-training-content.component';
import { COPILOT_TRAINING_SAMPLE_FAQS, COPILOT_TRAINING_SAMPLE_WHY } from '../data/copilot-training-sample.data';
import { MICROSOFT_TRAINING_SAMPLE_FAQS, MICROSOFT_TRAINING_SAMPLE_WHY } from '../data/microsoft-training-sample.data';
import { EMAIL_ARCHIVING_SAMPLE_FAQS, EMAIL_ARCHIVING_SAMPLE_WHY } from '../data/email-archiving-sample.data';
import { WaapContentComponent } from '../sections/waap-content.component';
import { IotInfrastructureContentComponent } from '../sections/iot-infrastructure-content.component';
import { DomainsContentComponent } from '../sections/domains-content.component';
import { AgenticAiContentComponent } from '../sections/agentic-ai-content.component';
import { AGENTIC_AI_SAMPLE_FAQS, AGENTIC_AI_SAMPLE_WHY } from '../data/agentic-ai-sample.data';
import { EnterpriseDmarcContentComponent } from '../sections/enterprise-dmarc-content.component';
import { BusinessEmailContentComponent } from '../sections/business-email-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';
import { EmailSignatureContentComponent } from '../sections/email-signature-content.component';
import { EmailSignatureHeroComponent } from '../sections/email-signature-hero.component';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { CartService } from '../core/cart.service';
import { CatalogService, slugify } from '../core/catalog.service';
import { DocKind, DocRequestService } from '../core/doc-request.service';
import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { PricingPlan, ProductPageService, ProductView } from '../core/product-page.service';
import { SeoService } from '../core/seo.service';
import { DEEP_CONTENT, PLATFORM_ICONS, PRODUCT_VIDEOS, RICH_PRODUCTS } from '../data/products.data';
import { Faq } from '../data/models';
import { SITE, WORLD_MAP_HTML } from '../data/site.data';
import { HeroNetDirective, ProductFaqComponent } from '../sections/product';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { CloudCctvContentComponent } from '../sections/cloud-cctv-content.component';
import { AcronisTrueImageContentComponent } from '../sections/acronis-true-image-content.component';
import { SiteLockContentComponent } from '../sections/sitelock-content.component';
import { VmcContentComponent } from '../sections/vmc-content.component';
import { CmcContentComponent } from '../sections/cmc-content.component';
import { TsplusServerMonitoringContentComponent } from '../sections/tsplus-server-monitoring-content.component';
import { TsplusRemoteSupportContentComponent } from '../sections/tsplus-remote-support-content.component';
import { TsplusRemoteSupportHeroComponent } from '../sections/tsplus-remote-support-hero.component';
import { TsplusAdvancedSecurityContentComponent } from '../sections/tsplus-advanced-security-content.component';
import { TsplusAdvancedSecurityHeroComponent } from '../sections/tsplus-advanced-security-hero.component';
import { TsplusRemoteAccessContentComponent } from '../sections/tsplus-remote-access-content.component';
import { TsplusRemoteAccessHeroComponent } from '../sections/tsplus-remote-access-hero.component';
import { ResellerProgramContentComponent } from '../sections/reseller-program-content.component';
import { SovereignPerformanceComponent } from '../sections/sovereign-performance.component';
import { ScrutinyEdrContentComponent } from '../sections/scrutiny-edr-content.component';
import { ScrutinyDlpContentComponent } from './scrutiny-dlp-content.component';
import { VortexSocContentComponent } from './vortex-soc-content.component';
import { VortexSegContentComponent } from './vortex-seg-content.component';
import { InfrastructureContentComponent } from '../sections/infrastructure-content.component';
import { ColocationContentComponent } from '../sections/colocation-content.component';
import { MarketplaceContentComponent } from '../sections/marketplace-content.component';
import { WhatsAppSmbContentComponent } from '../sections/whatsapp-smb-content.component';

import { ManagedAwsContentComponent } from '../sections/managed-aws-content.component';

import { ManagedMicrosoft365ContentComponent } from '../sections/managed-microsoft-365-content.component';
import { Microsoft365EnterpriseReferenceComponent } from '../sections/microsoft-365-enterprise-reference.component';
import {
  Microsoft365EnterpriseAdditionalComponent,
  Microsoft365EnterpriseFrontlineComponent,
  Microsoft365EnterpriseNonprofitComponent,
  Microsoft365EnterpriseOffice365Component,
} from '../sections/microsoft-365-enterprise-variants.component';
import { SuppliedServiceReferenceComponent } from '../sections/supplied-service-reference.component';
import { SUPPLIED_SERVICE_EXTRAS } from '../data/supplied-service-extras.data';
import { MicrosoftCopilotContentComponent } from '../sections/microsoft-copilot-content.component';
import { CopilotStudioContentComponent } from '../sections/copilot-studio-content.component';
import { CloudObjectStorageContentComponent } from '../sections/cloud-object-storage-content.component';
import { ZohoWorkspaceContentComponent } from '../sections/zoho-workspace-content.component';
import { EntraIdContentComponent } from '../sections/entra-id-content.component';
import { EntraIdHeroComponent } from '../sections/entra-id-hero.component';
import { EntraIdBackupContentComponent } from '../sections/entra-id-backup-content.component';
import { EntraIdBackupHeroComponent } from '../sections/entra-id-backup-hero.component';
import { DigicertContentComponent } from '../sections/digicert-content.component';
import { AutonomousThreatManagementContentComponent } from '../sections/autonomous-threat-management-content.component';
import { AutonomousThreatManagementHeroComponent } from '../sections/autonomous-threat-management-hero.component';
import { AutonomousThreatSolutionDetailComponent } from '../sections/autonomous-threat-solution-detail.component';
import { ATM_SOLUTION_DETAILS } from '../data/atm-solution-detail.data';
import { OurPlatformReferenceComponent } from '../sections/our-platform-reference.component';
import { WatchtowerReferenceComponent } from '../sections/watchtower-reference.component';
import { BareMetalContentComponent } from '../sections/bare-metal-content.component';
import { GenaiProtectionContentComponent } from '../sections/genai-protection-content.component';
import { CloudMigrationAdvantageComponent } from '../sections/cloud-migration-advantage.component';
import { AcronisBackupAdvancedContentComponent } from '../sections/acronis-backup-advanced-content.component';
import { AcronisOtContentComponent } from '../sections/acronis-ot-content.component';
import { NvidiaA100SourceComponent } from '../sections/nvidia-a100-source.component';
import { NvidiaA100AssuranceComponent } from '../sections/nvidia-a100-assurance.component';
import { NvidiaH100AssuranceComponent } from '../sections/nvidia-h100-assurance.component';
import { H100HeroAction, NvidiaH100HeroComponent } from '../sections/nvidia-h100-hero.component';
import { H100PlanSelection, NvidiaH100ContentComponent } from '../sections/nvidia-h100-content.component';

/** One row of the EDR comparison table, split into its header cell and body cells. */
interface CompareRow {
  head: string;
  cells: string[];
}

type CybirdTerm = '1y' | '2y' | '3y' | '5y';

interface CybirdPlan {
  name: string;
  users: number;
  prices: Record<CybirdTerm, number>;
  support: number;
  supportRange: string;
  accent: 'essentials' | 'plus' | 'pro' | 'max';
}

type TallyTerm = 'monthly' | '3m' | '6m' | '1y';

interface TallyPlan {
  users: string;
  name: string;
  edition: string;
  prices: Record<TallyTerm, number>;
  serverType: string;
  cpu: string;
  memory: string;
  disk: string;
}

type CloudDriveTerm = 'monthly' | '3m' | '6m' | '1y';

interface CloudDrivePlan {
  storage: string;
  unit: string;
  qty: number;
  prices: Record<CloudDriveTerm, number>;
  comments: string;
}

type CloudBackupTerm = 'monthly' | 'quarterly' | '6m' | 'yearly';
type CloudBackupCountry = 'IN' | 'UK' | 'AE' | 'US' | 'SG';

interface CloudBackupPlan {
  storage: string;
  monthly: number;
  quarterly: number;
  '6m': number;
  yearly: number;
}

interface ProductTourSlide {
  title: string;
  description: string;
  image: string;
}

/**
 * The routed service / product page — everything the original `#ppage` overlay
 * rendered through its six-script `__ppExtras` pipeline, in one component.
 *
 * All content arrives pre-computed from `ProductPageService.build()`; this class
 * only resolves the slug, keeps the hero/video/FAQ interactions alive, and wires
 * the cart, document gate and callback hand-offs.
 */
@Component({
  selector: 'xh-product-page',
  standalone: true,
  imports: [
    EnterpriseDmarcContentComponent,
    BusinessEmailContentComponent,
    InsightsSectionComponent,
    RouterLink,
    HeroNetDirective,
    ProductFaqComponent,
    CloudCctvContentComponent,
    AcronisTrueImageContentComponent,
    SiteLockContentComponent,
    VmcContentComponent,
    CmcContentComponent,
    TsplusServerMonitoringContentComponent,
    TsplusRemoteSupportContentComponent,
    TsplusRemoteSupportHeroComponent,
    TsplusAdvancedSecurityContentComponent,
    TsplusAdvancedSecurityHeroComponent,
    TsplusRemoteAccessContentComponent,
    TsplusRemoteAccessHeroComponent,
    ResellerProgramContentComponent,
    SovereignPerformanceComponent,
    ScrutinyEdrContentComponent,
    ScrutinyDlpContentComponent,
    VortexSocContentComponent,
    VortexSegContentComponent,
    InfrastructureContentComponent,
    ColocationContentComponent,
    MarketplaceContentComponent,
    WhatsAppSmbContentComponent,

    ManagedAwsContentComponent,

    ManagedMicrosoft365ContentComponent,
    Microsoft365EnterpriseReferenceComponent,
    Microsoft365EnterpriseAdditionalComponent,
    Microsoft365EnterpriseFrontlineComponent,
    Microsoft365EnterpriseNonprofitComponent,
    Microsoft365EnterpriseOffice365Component,
    SuppliedServiceReferenceComponent,
    MicrosoftCopilotContentComponent,
    CopilotStudioContentComponent,
    WaapContentComponent,
    IotInfrastructureContentComponent,
    DomainsContentComponent,
    AgenticAiContentComponent,
    CloudObjectStorageContentComponent,
    EmailArchivingContentComponent,
    CloudDevopsContentComponent,
    MicrosoftTrainingContentComponent,
    CopilotTrainingContentComponent,
    AcronisMdrContentComponent,
    AcronisMdrHeroComponent,
    Rtx8000PricingComponent,
    RtxPro6000PricingComponent,
    Rtx6000AdaPricingComponent,
    RtxA6000PricingComponent,
    RtxPro6000DetailsComponent,
    Rtx6000AdaDetailsComponent,
    RtxA6000DetailsComponent,
    Rtx8000DetailsComponent,
    Rtx8000SpecificationsComponent,
    RtxPro6000SpecificationsComponent,
    Rtx6000AdaSpecificationsComponent,
    RtxA6000PerformanceComponent,
    Rtx8000UseCasesComponent,
    RtxPro6000ShowcaseComponent,
    Rtx6000AdaShowcaseComponent,
    Rtx8000StoriesComponent,
    RtxPro6000HeroComponent,
    Rtx6000AdaHeroComponent,
    RtxA6000HeroComponent,
    ZohoWorkspaceContentComponent,
    EntraIdContentComponent,
    EntraIdHeroComponent,
    EntraIdBackupContentComponent,
    EntraIdBackupHeroComponent,
    DigicertContentComponent,

    AutonomousThreatManagementContentComponent,
    AutonomousThreatManagementHeroComponent,
    AutonomousThreatSolutionDetailComponent,
    OurPlatformReferenceComponent,
    WatchtowerReferenceComponent,
    BareMetalContentComponent,
    GenaiProtectionContentComponent,
    CloudMigrationAdvantageComponent,
    AcronisBackupAdvancedContentComponent,
    AcronisOtContentComponent,
    NvidiaA100SourceComponent,
    NvidiaA100AssuranceComponent,
    NvidiaH100AssuranceComponent,
    NvidiaH100HeroComponent,
    NvidiaH100ContentComponent,

    EmailSignatureContentComponent,
    EmailSignatureHeroComponent,
  ],
  templateUrl: './product.page.html',
  styles: [`
    #ppage.nvidia-a100-page .pp-hero { display: none; }
    #ppage.nvidia-a100-page #ppOv { width: 100%; max-width: none; }
    #ppage.nvidia-a100-page .a100-related { display: flex; flex-wrap: nowrap; gap: 6px; align-items: center; margin-top: 24px; overflow-x: auto; white-space: nowrap; color: #486078; font-size: 12px; }
    #ppage.nvidia-a100-page .a100-related > * { flex: none; }
    #ppage.nvidia-a100-page .a100-related a, #ppage.nvidia-a100-page .a100-related-pill { padding: 6px 10px; border: 1px solid #d7e3f5; border-radius: 999px; color: #1767d6; text-decoration: none; }
    #ppage.tally-page .pph-scene.has-illus.standalone-illus { top: 50%; bottom: auto; transform: translateY(-50%); overflow: visible; mask-image: none; }
    #ppage.tally-page .pph-illus { position: relative; }
    #ppage.tally-page .tally-prime-hero-logo {
      position: absolute;
      z-index: 3;
      top: auto;
      right: 10%;
      bottom: 12px;
      display: block;
      width: 205px;
      height: 76px;
      object-fit: contain;
      padding: 0;
      border: 0;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      filter: none;
    }
    @media(max-width:1100px) {
      #ppage.tally-page .tally-prime-hero-logo { right: 5%; bottom: 10px; width: 180px; height: 67px; }
    }
    @media(max-width:900px) {
      #ppage.tally-page .pph-scene.has-illus.standalone-illus { top: auto; bottom: auto; transform: none; margin: 24px auto; }
      #ppage.tally-page .tally-prime-hero-logo { top: auto; right: 7%; bottom: 0; width: 160px; height: 60px; }
    }
    #ppage.cloud-migration-page .pph-scene.has-illus.standalone-illus { right: 1%; width: 49%; top: 2%; bottom: 2%; mask-image: none; }
    #ppage.cloud-migration-page .pph-scene.has-illus.standalone-illus .pph-illus-img { width: 96%; max-width: 600px; max-height: 440px; filter: none; }
    #ppage.acronis-backup-advanced-page .pph-scene.has-illus.standalone-illus { right: 2%; width: 43%; top: 0; bottom: 0; mask-image: none; opacity: 1; }
    #ppage.acronis-backup-advanced-page .pph-scene.has-illus.standalone-illus .pph-illus { width: 100%; height: 100%; }
    #ppage.acronis-backup-advanced-page .pph-scene.has-illus.standalone-illus .pph-illus-img { width: 100%; max-width: 600px; max-height: 430px; filter: none; }
    #ppage.acronis-ot-page .pph-scene.has-illus.standalone-illus { right: 2%; width: 43%; top: 0; bottom: 0; mask-image: none; opacity: 1; }
    #ppage.acronis-ot-page .pph-scene.has-illus.standalone-illus .pph-illus { width: 100%; height: 100%; }
    #ppage.acronis-ot-page .pph-scene.has-illus.standalone-illus .pph-illus-img { width: 100%; max-width: 560px; max-height: 430px; filter: none; }
    #ppage.rtx-8000-page .pph-map, #ppage.rtx-8000-page .pph-net { display: none; }
    @media(max-width:900px) {
      #ppage.cloud-migration-page .pph-scene.has-illus.standalone-illus { position: relative; right: auto; width: min(100%, 600px); top: auto; bottom: auto; margin: 18px auto 0; opacity: 1; }
      #ppage.cloud-migration-page .pph-scene.has-illus.standalone-illus .pph-illus-img { width: 100%; max-width: 560px; max-height: none; }
      #ppage.acronis-backup-advanced-page .pph-scene.has-illus.standalone-illus { position: relative; right: auto; width: min(100%, 600px); top: auto; bottom: auto; margin: 18px auto 0; opacity: 1; }
      #ppage.acronis-backup-advanced-page .pph-scene.has-illus.standalone-illus .pph-illus { height: auto; }
      #ppage.acronis-backup-advanced-page .pph-scene.has-illus.standalone-illus .pph-illus-img { width: 100%; max-width: 560px; max-height: none; }
      #ppage.acronis-ot-page .pph-scene.has-illus.standalone-illus { position: relative; right: auto; width: min(100%, 600px); top: auto; bottom: auto; margin: 18px auto 0; opacity: 1; }
      #ppage.acronis-ot-page .pph-scene.has-illus.standalone-illus .pph-illus { height: auto; }
      #ppage.acronis-ot-page .pph-scene.has-illus.standalone-illus .pph-illus-img { width: 100%; max-width: 560px; max-height: none; }
    }
    #ppage .migration-capabilities { padding: 52px 0 58px; }
    #ppage .migration-capabilities-heading { max-width: 780px; margin: 0 auto 50px; text-align: center; }
    #ppage .migration-capabilities-heading > span { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 13px; color: var(--blue); font: 700 12px/1.4 var(--mono); letter-spacing: .14em; text-transform: uppercase; }
    #ppage .migration-capabilities-heading > span::before { content: ''; width: 22px; height: 2px; background: var(--orange); }
    #ppage .migration-capabilities-heading h2 { margin: 0 0 12px; color: var(--navy); font: 800 clamp(30px, 3.5vw, 44px)/1.12 var(--disp); letter-spacing: -.035em; }
    #ppage .migration-capabilities-heading p { margin: 0; color: var(--slate); font-size: 17px; line-height: 1.6; }
    #ppage .migration-capabilities-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
    #ppage .migration-capability-card { position: relative; min-width: 0; min-height: 234px; overflow: hidden; padding: 28px; border: 1px solid var(--line); border-radius: 16px; background: #fff; box-shadow: 0 10px 30px rgba(4,30,66,.08); transition: transform .35s, box-shadow .35s, border-color .35s; }
    #ppage .migration-capability-card::before { content: ''; position: absolute; top: 0; left: 0; width: 0; height: 3px; background: linear-gradient(90deg, var(--blue), var(--orange)); transition: width .5s; }
    #ppage .migration-capability-card:hover { transform: translateY(-6px); border-color: #bfd3f5; box-shadow: 0 22px 60px rgba(4,30,66,.16); }
    #ppage .migration-capability-card:hover::before { width: 100%; }
    #ppage .migration-capability-icon { display: grid; place-items: center; width: 52px; height: 52px; margin-bottom: 17px; border: 1px solid #d5e3f8; border-radius: 14px; color: var(--blue); background: linear-gradient(135deg, var(--blue-soft), #fff); transition: transform .35s, color .35s, background .35s, border-color .35s; }
    #ppage .migration-capability-icon svg { width: 24px; height: 24px; }
    #ppage .migration-capability-card:hover .migration-capability-icon { transform: rotate(-6deg) scale(1.05); border-color: transparent; color: #fff; background: linear-gradient(135deg, var(--blue), #0b3e9c); }
    #ppage .migration-capability-card h3 { margin: 0 0 9px; color: var(--navy); font: 750 19px/1.3 var(--disp); }
    #ppage .migration-capability-card p { margin: 0; color: var(--slate); font-size: 15px; line-height: 1.55; }
    #ppage .migration-capability-tags { display: block; margin-top: 10px; color: var(--blue); font: 600 11px/1.45 var(--mono); }
    @media(max-width:900px) {
      #ppage .migration-capabilities { padding: 38px 0 44px; }
      #ppage .migration-capabilities-heading { margin-bottom: 32px; }
      #ppage .migration-capabilities-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media(max-width:600px) {
      #ppage .migration-capabilities-grid { grid-template-columns: 1fr; }
      #ppage .migration-capability-card { min-height: 0; padding: 24px; }
    }
    #ppage .migration-process { padding: 58px 0 72px; }
    #ppage .migration-process-heading { max-width: 780px; margin: 0 auto 52px; text-align: center; }
    #ppage .migration-process-heading > span { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 13px; color: var(--blue); font: 700 12px/1.4 var(--mono); letter-spacing: .14em; text-transform: uppercase; }
    #ppage .migration-process-heading > span::before { content: ''; width: 22px; height: 2px; background: var(--orange); }
    #ppage .migration-process-heading h2 { margin: 0 0 12px; color: var(--navy); font: 800 clamp(30px, 3.5vw, 44px)/1.12 var(--disp); letter-spacing: -.035em; }
    #ppage .migration-process-heading p { margin: 0; color: var(--slate); font-size: 17px; line-height: 1.6; }
    #ppage .migration-process-phases { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
    #ppage .migration-process-phase { display: flex; flex-direction: column; min-width: 0; overflow: hidden; border: 1px solid var(--line); border-radius: 16px; background: #fff; box-shadow: 0 6px 18px rgba(4,30,66,.06); }
    #ppage .migration-phase-heading { display: flex; align-items: center; gap: 10px; padding: 16px 16px 6px; }
    #ppage .migration-phase-heading b { color: var(--navy); font: 800 15px/1 var(--disp); letter-spacing: .04em; }
    #ppage .migration-phase-badge { display: grid; place-items: center; width: 30px; height: 30px; flex: 0 0 30px; border-radius: 50%; color: #fff; font: 800 11px/1 var(--mono); }
    #ppage .migration-phase-badge.plan { background: #1565d8; }
    #ppage .migration-phase-badge.build { background: #ff8c1a; }
    #ppage .migration-phase-badge.move { background: #16a34a; }
    #ppage .migration-phase-badge.operate { background: #6d5bff; }
    #ppage .migration-phase-intro { min-height: 61px; margin: 0; padding: 0 16px 14px; border-bottom: 1px solid var(--line); color: var(--ink); font-size: 12.5px; line-height: 1.5; }
    #ppage .migration-phase-steps { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); flex: 1; }
    #ppage .migration-process-step { min-width: 0; padding: 16px 12px; border-right: 1px solid var(--line); }
    #ppage .migration-process-step:last-child { border-right: 0; }
    #ppage .migration-process-step > strong { display: block; margin-bottom: 10px; color: var(--blue); font: 800 15px/1 var(--disp); }
    #ppage .migration-process-icon { display: grid; place-items: center; width: 42px; height: 42px; margin-bottom: 10px; border-radius: 50%; color: var(--blue); background: var(--blue-soft); }
    #ppage .migration-process-icon svg { width: 22px; height: 22px; }
    #ppage .migration-process-step h3 { margin: 0 0 4px; color: var(--navy); font: 800 14px/1.2 var(--disp); }
    #ppage .migration-process-step p { margin: 0 0 8px; color: var(--ink); font-size: 11.5px; line-height: 1.4; }
    #ppage .migration-process-step ul { margin: 0; padding: 0; list-style: none; }
    #ppage .migration-process-step li { position: relative; padding-left: 12px; color: var(--ink); font-size: 11.5px; font-weight: 500; line-height: 1.7; }
    #ppage .migration-process-step li::before { content: ''; position: absolute; top: 8px; left: 0; width: 4px; height: 4px; border-radius: 50%; background: var(--blue); }
    @media(max-width:1080px) {
      #ppage .migration-process-phases { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media(max-width:600px) {
      #ppage .migration-process { padding: 44px 0 54px; }
      #ppage .migration-process-heading { margin-bottom: 32px; }
      #ppage .migration-process-phases { grid-template-columns: 1fr; }
      #ppage .migration-phase-intro { min-height: 0; }
    }
    #ppage .migration-advantage { padding: 34px 0 72px; background: var(--ice); box-shadow: 0 0 0 100vmax var(--ice); clip-path: inset(0 -100vmax); }
    #ppage .migration-principles-section { padding: 34px 0 0; background: var(--ice); box-shadow: 0 0 0 100vmax var(--ice); clip-path: inset(0 -100vmax); }
    #ppage .migration-principles-section .migration-principles { margin-bottom: 0; }
    #ppage xh-cloud-migration-advantage { display: block; background: var(--ice); box-shadow: 0 0 0 100vmax var(--ice); clip-path: inset(0 -100vmax); }
    #ppage .migration-principles { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; margin-bottom: 72px; }
    #ppage .migration-principles article { display: flex; gap: 12px; min-width: 0; padding: 17px; border: 1px solid var(--line); border-radius: 14px; background: #fff; box-shadow: 0 6px 18px rgba(4,30,66,.06); }
    #ppage .migration-principles article > span { display: grid; place-items: center; width: 40px; height: 40px; flex: 0 0 40px; border-radius: 11px; color: var(--blue); background: var(--blue-soft); }
    #ppage .migration-principles svg { width: 20px; height: 20px; }
    #ppage .migration-principles b { display: block; margin-bottom: 4px; color: var(--navy); font: 800 13px/1.2 var(--disp); }
    #ppage .migration-principles small { display: block; color: var(--slate); font-size: 11px; line-height: 1.45; }
    #ppage .migration-advantage-heading { max-width: 790px; margin: 0 auto 50px; text-align: center; }
    #ppage .migration-advantage-heading > span { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 13px; color: var(--blue); font: 700 12px/1.4 var(--mono); letter-spacing: .14em; text-transform: uppercase; }
    #ppage .migration-advantage-heading > span::before { content: ''; width: 22px; height: 2px; background: var(--orange); }
    #ppage .migration-advantage-heading h2 { margin: 0 0 12px; color: var(--navy); font: 800 clamp(28px, 3.2vw, 42px)/1.12 var(--disp); letter-spacing: -.035em; }
    #ppage .migration-advantage-heading p { margin: 0; color: var(--slate); font-size: 16px; }
    #ppage .migration-architecture { display: grid; grid-template-columns: minmax(0, 1fr) minmax(190px, .72fr) minmax(0, 1fr); gap: 16px; align-items: start; }
    #ppage .migration-architecture-column { display: flex; flex-direction: column; gap: 10px; min-width: 0; padding: 16px; border: 1px solid var(--line); border-radius: 18px; background: #fff; box-shadow: 0 6px 18px rgba(4,30,66,.06); }
    #ppage .migration-architecture-column > h3, #ppage .migration-journey-column > h3 { align-self: flex-start; margin: 0; padding: 9px 16px; border-radius: 999px; color: #fff; background: var(--navy); font: 800 12px/1 var(--disp); letter-spacing: .03em; }
    #ppage .migration-architecture-column.after > h3 { background: var(--blue); }
    #ppage .migration-architecture-subtitle { margin: -2px 0 4px; color: var(--slate); font-size: 12px; font-weight: 600; line-height: 1.3; }
    #ppage .migration-architecture-group, #ppage .migration-challenges { padding: 12px; border: 1px solid var(--line); border-radius: 12px; background: var(--ice); }
    #ppage .migration-architecture-group.accent { border-color: #8ab4ff; background: linear-gradient(160deg, #eaf1fe, #f2f6fc); }
    #ppage .migration-architecture-group h4, #ppage .migration-challenges h4 { margin: 0 0 9px; color: var(--slate); font: 700 9.5px/1.2 var(--mono); letter-spacing: .05em; text-transform: uppercase; }
    #ppage .migration-architecture-tiles { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; }
    #ppage .migration-architecture-tiles.five { grid-template-columns: repeat(5, minmax(0, 1fr)); }
    #ppage .migration-architecture-tiles.six { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    #ppage .migration-architecture-tile { display: flex; flex-direction: column; align-items: center; gap: 4px; min-width: 0; padding: 9px 4px; border: 1px solid var(--line); border-radius: 9px; background: #fff; text-align: center; }
    #ppage .migration-architecture-tile > span { display: grid; place-items: center; width: 26px; height: 26px; border-radius: 7px; color: var(--blue); background: var(--blue-soft); }
    #ppage .migration-architecture-tile svg { width: 15px; height: 15px; }
    #ppage .migration-architecture-tile b { color: var(--navy); font: 700 9px/1.18 var(--disp); overflow-wrap: anywhere; }
    #ppage .migration-down-arrow { align-self: center; color: var(--blue); font-size: 17px; line-height: 1; }
    #ppage .migration-challenges > div { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 7px; }
    #ppage .migration-challenges span { display: flex; align-items: flex-start; gap: 5px; color: var(--slate); font-size: 9px; font-weight: 500; line-height: 1.25; }
    #ppage .migration-challenges i { display: grid; place-items: center; width: 12px; height: 12px; flex: 0 0 12px; border: 1px solid #e0524a; border-radius: 50%; color: #e0524a; font: 800 8px/1 var(--mono); }
    #ppage .migration-journey-column { display: flex; flex-direction: column; gap: 12px; min-width: 0; padding-top: 34px; }
    #ppage .migration-journey-column > h3 { color: var(--blue); background: var(--blue-soft); }
    #ppage .migration-journey-list { display: flex; flex-direction: column; gap: 12px; }
    #ppage .migration-journey-list article { display: flex; align-items: flex-start; gap: 10px; }
    #ppage .migration-journey-list article > span { display: grid; place-items: center; width: 38px; height: 38px; flex: 0 0 38px; border: 1px solid var(--line); border-radius: 50%; color: var(--blue); background: #fff; box-shadow: 0 6px 18px rgba(4,30,66,.06); font: 800 11px/1 var(--mono); }
    #ppage .migration-journey-list b { display: block; color: var(--navy); font: 800 13px/1.2 var(--disp); }
    #ppage .migration-journey-list small { display: block; color: var(--slate); font-size: 11px; line-height: 1.4; }
    #ppage .migration-bridge { padding: 16px; border-radius: 14px; color: #fff; background: linear-gradient(160deg, #062a5c, #041e42); }
    #ppage .migration-bridge > b { display: block; margin-bottom: 12px; text-align: center; font: 800 12px/1 var(--disp); letter-spacing: .04em; }
    #ppage .migration-bridge > div { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
    #ppage .migration-bridge span { padding: 7px 3px; border-radius: 6px; color: #c9d8f5; background: rgba(255,255,255,.07); text-align: center; font-size: 9px; font-weight: 600; }
    @media(max-width:1080px) {
      #ppage .migration-principles { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-bottom: 54px; }
      #ppage .migration-principles article:last-child { grid-column: 1 / -1; }
      #ppage .migration-architecture { grid-template-columns: 1fr; }
      #ppage .migration-journey-column { padding: 10px 16px; }
    }
    @media(max-width:600px) {
      #ppage .migration-advantage { padding: 28px 0 52px; }
      #ppage .migration-principles { grid-template-columns: 1fr; margin-bottom: 44px; }
      #ppage .migration-principles article:last-child { grid-column: auto; }
      #ppage .migration-advantage-heading { margin-bottom: 32px; }
      #ppage .migration-architecture-column { padding: 12px; }
      #ppage .migration-architecture-tiles, #ppage .migration-architecture-tiles.five, #ppage .migration-architecture-tiles.six { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      #ppage .migration-challenges > div { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    #ppage .migration-proof { padding: 66px 0 72px; }
    #ppage .migration-value-strip { display: grid; grid-template-columns: .85fr repeat(6, minmax(0, 1fr)); overflow: hidden; margin-bottom: 92px; border: 1px solid var(--line); border-radius: 18px; background: #fff; box-shadow: 0 6px 18px rgba(4,30,66,.06); }
    #ppage .migration-value-strip > strong { display: grid; place-items: center; padding: 22px 14px; color: #fff; background: var(--navy); text-align: center; font: 800 14px/1.3 var(--disp); }
    #ppage .migration-value-strip article { min-width: 0; padding: 20px 15px; border-right: 1px solid var(--line); }
    #ppage .migration-value-strip article:last-child { border-right: 0; }
    #ppage .migration-value-strip article > span { display: grid; place-items: center; width: 36px; height: 36px; margin-bottom: 8px; border-radius: 10px; color: var(--blue); background: var(--blue-soft); font: 800 11px/1 var(--mono); }
    #ppage .migration-value-strip article > span svg { width: 18px; height: 18px; }
    #ppage .migration-value-strip b { display: block; margin-bottom: 7px; color: var(--navy); font: 800 13px/1.2 var(--disp); }
    #ppage .migration-value-strip p { margin: 0; color: var(--slate); font-size: 11px; line-height: 1.45; }
    #ppage .migration-scenarios-heading { max-width: 780px; margin: 0 auto 50px; text-align: center; }
    #ppage .migration-scenarios-heading > span, #ppage .migration-assessment-copy > span { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 13px; color: var(--blue); font: 700 12px/1.4 var(--mono); letter-spacing: .14em; text-transform: uppercase; }
    #ppage .migration-scenarios-heading > span::before, #ppage .migration-assessment-copy > span::before { content: ''; width: 22px; height: 2px; background: var(--orange); }
    #ppage .migration-scenarios-heading h2 { margin: 0 0 12px; color: var(--navy); font: 800 clamp(30px, 3.5vw, 44px)/1.12 var(--disp); letter-spacing: -.035em; }
    #ppage .migration-scenarios-heading p { margin: 0; color: var(--slate); font-size: 16px; line-height: 1.6; }
    #ppage .migration-scenarios-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
    #ppage .migration-scenario-card { display: flex; flex-direction: column; gap: 11px; min-width: 0; padding: 22px; border: 1px solid var(--line); border-radius: 18px; background: #fff; box-shadow: 0 6px 18px rgba(4,30,66,.06); transition: transform .25s, box-shadow .25s, border-color .25s; }
    #ppage .migration-scenario-card:hover { transform: translateY(-4px); border-color: #8ab4ff; box-shadow: 0 18px 42px rgba(4,30,66,.13); }
    #ppage .migration-scenario-title { display: flex; align-items: center; gap: 11px; }
    #ppage .migration-scenario-title > span { display: grid; place-items: center; width: 42px; height: 42px; flex: 0 0 42px; border-radius: 11px; color: var(--blue); background: var(--blue-soft); }
    #ppage .migration-scenario-title svg { width: 22px; height: 22px; }
    #ppage .migration-scenario-title h3 { margin: 0; color: var(--navy); font: 800 17px/1.2 var(--disp); }
    #ppage .migration-scenario-card > p { margin: 0; color: var(--slate); font-size: 13px; line-height: 1.55; }
    #ppage .migration-scenario-card > small { color: var(--slate); font: 700 9.5px/1 var(--mono); letter-spacing: .06em; text-transform: uppercase; }
    #ppage .migration-scenario-destination { color: var(--blue); font-size: 12px; font-weight: 600; line-height: 1.4; }
    #ppage .migration-scenario-sample { display: flex; align-items: center; gap: 12px; margin-top: auto; padding: 14px; border: 1px solid var(--line); border-radius: 12px; background: var(--ice); }
    #ppage .migration-scenario-sample > div { min-width: 0; flex: 1; }
    #ppage .migration-scenario-sample div small { color: var(--slate); font: 700 8.5px/1.2 var(--mono); letter-spacing: .04em; text-transform: uppercase; }
    #ppage .migration-scenario-sample div b { display: block; margin: 3px 0; color: var(--navy); font: 800 13px/1.25 var(--disp); }
    #ppage .migration-scenario-sample em { display: block; color: var(--slate); font-size: 11px; font-style: normal; line-height: 1.35; }
    #ppage .migration-scenario-sample > strong { flex: 0 0 auto; color: #16a34a; text-align: center; font: 800 23px/1 var(--disp); }
    #ppage .migration-scenario-sample > strong small { display: block; max-width: 76px; margin-top: 4px; color: var(--slate); font: 600 9px/1.1 var(--mono); }
    #ppage .migration-scenario-tags { display: flex; flex-wrap: wrap; gap: 6px; }
    #ppage .migration-scenario-tags span { padding: 6px 9px; border: 1px solid var(--line); border-radius: 999px; color: var(--navy); background: var(--ice); font: 600 9px/1 var(--mono); }
    #ppage .migration-assessment { display: grid; grid-template-columns: 1fr 1fr; gap: 34px; align-items: center; margin-top: 76px; padding: 40px; border-radius: 24px; background: linear-gradient(155deg, #062a5c, #041e42); }
    #ppage .migration-assessment-copy > span { color: #8ab4ff; }
    #ppage .migration-assessment-copy h2 { margin: 7px 0 12px; color: #fff; font: 800 clamp(25px, 2.8vw, 36px)/1.15 var(--disp); }
    #ppage .migration-assessment-copy p { margin: 0 0 22px; color: #c9d8f5; font-size: 15px; line-height: 1.6; }
    #ppage .migration-assessment-copy > div { display: flex; flex-wrap: wrap; gap: 12px; }
    #ppage .migration-assessment-secondary { border: 1.5px solid rgba(255,255,255,.4); color: #fff; background: transparent; }
    #ppage .migration-assessment-points { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
    #ppage .migration-assessment-points article { display: flex; align-items: flex-start; gap: 12px; }
    #ppage .migration-assessment-points article > span { display: grid; place-items: center; width: 40px; height: 40px; flex: 0 0 40px; border-radius: 11px; color: #8ab4ff; background: rgba(138,180,255,.14); font: 800 11px/1 var(--mono); }
    #ppage .migration-assessment-points b { display: block; color: #fff; font: 700 14px/1.25 var(--disp); }
    #ppage .migration-assessment-points small { display: block; color: #9fb6de; font-size: 12px; line-height: 1.4; }
    @media(max-width:1080px) {
      #ppage .migration-value-strip { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      #ppage .migration-value-strip > strong { grid-column: 1 / -1; }
      #ppage .migration-scenarios-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    }
    @media(max-width:760px) {
      #ppage .migration-proof { padding: 48px 0 54px; }
      #ppage .migration-value-strip { grid-template-columns: repeat(2, minmax(0, 1fr)); margin-bottom: 58px; }
      #ppage .migration-scenarios-grid { grid-template-columns: 1fr; }
      #ppage .migration-assessment { grid-template-columns: 1fr; margin-top: 54px; padding: 28px; }
    }
    @media(max-width:520px) {
      #ppage .migration-value-strip { grid-template-columns: 1fr; }
      #ppage .migration-value-strip article { border-right: 0; border-bottom: 1px solid var(--line); }
      #ppage .migration-assessment-points { grid-template-columns: 1fr; }
      #ppage .migration-assessment-copy .btn { width: 100%; white-space: normal; }
    }
    #ppage.disaster-recovery-page .pp-tagline-support,
    #ppage.disaster-recovery-page .pp-typewriter { width: 55% !important; max-width: 700px !important; white-space: normal; overflow-wrap: break-word; line-height: 1.45; }
    @media(max-width:900px) { #ppage.disaster-recovery-page .pp-tagline-support, #ppage.disaster-recovery-page .pp-typewriter { width: 100% !important; max-width: 100% !important; } }
    #ppage .pph-scene.cloud-desktop-hero-animation, #ppage .pph-scene.disaster-recovery-hero-animation, #ppage .pph-scene.workforce-hero-animation { width: 40%; right: 2%; top: 50%; bottom: auto; height: 420px; transform: translateY(-50%); opacity: 1; mask-image: none; overflow: hidden; background: transparent; }
    .cloud-desktop-hero-animation iframe, .disaster-recovery-hero-animation iframe, .workforce-hero-animation iframe { display: block; width: 100%; height: 100%; border: 0; }
    @media(max-width:900px) { #ppage .pph-scene.cloud-desktop-hero-animation, #ppage .pph-scene.disaster-recovery-hero-animation, #ppage .pph-scene.workforce-hero-animation { position: relative; width: calc(100% - 32px); max-width: 620px; right: auto; top: auto; transform: none; margin: 24px auto; height: 360px; } }

    #ppage.microsoft-copilot-page > .pp-hero { min-height: 650px; padding: 60px 0 72px; background: linear-gradient(135deg,#061634 0%,#0c2b63 55%,#12408f 100%); }
    #ppage .copilot-hero-copy { position: relative; z-index: 3; max-width: 56%; padding: 0; }
    #ppage .copilot-source-crumb { margin-bottom: 22px; color: #9fb6de; font: 500 12px var(--mono); }
    #ppage .copilot-source-crumb a:hover { color: #fff; }
    #ppage .copilot-source-crumb strong { color: #fff; font-weight: 500; }
    #ppage .copilot-eyebrow { display: inline-flex; align-items: center; gap: 8px; padding: 7px 14px; border: 1px solid rgba(255,255,255,.16); border-radius: 99px; background: rgba(255,255,255,.08); color: #bcd4ff; font: 500 11.5px var(--mono); letter-spacing: .16em; text-transform: uppercase; }
    #ppage .copilot-eyebrow .dot { width: 7px; height: 7px; border-radius: 50%; background: #5fe08d; box-shadow: 0 0 0 7px rgba(95,224,141,.1); }
    #ppage .copilot-hero-copy h1 { display: block; max-width: 620px; margin: 20px 0 8px; color: #fff; font-size: clamp(30px,4vw,46px); font-weight: 800; line-height: 1.08; white-space: normal; }
    #ppage .copilot-hero-copy h1 .xr { color: #ff3b3b; }
    #ppage .copilot-hero-copy h1 .prod { color: #fff; }
    #ppage .copilot-lead { max-width: 540px; margin: 16px 0 4px; color: #eaf2ff; font-size: 18px; font-weight: 600; line-height: 1.6; }
    #ppage .copilot-lead2 { max-width: 540px; margin: 0 0 16px; color: #c9d8f2; font-size: 15.5px; line-height: 1.6; }
    #ppage .copilot-tech { margin: 6px 0 18px; color: #7fb0ff; font: 700 19px var(--disp); }
    #ppage .copilot-hero-points { display: grid; grid-template-columns: 1fr 1fr; gap: 11px 22px; max-width: 540px; margin-bottom: 26px; color: #eaf2ff; font-size: 14.5px; }
    #ppage .copilot-hero-points span { display: flex; align-items: center; gap: 10px; }
    #ppage .copilot-hero-points span::first-letter { color: #fff; }
    #ppage .copilot-hero-art { top: 145px; right: 4%; bottom: auto; width: 42%; min-height: 380px; display: flex; align-items: center; justify-content: center; opacity: 1; overflow: visible; mask-image: none; }
    #ppage .copilot-orbit-ring { position: absolute; inset: 6% 8%; z-index: 0; border: 1.5px dashed rgba(127,176,255,.3); border-radius: 50%; animation: copilotOrbit 40s linear infinite; }
    #ppage .copilot-orbit-ring::after { content: ''; position: absolute; top: -5px; left: 50%; width: 9px; height: 9px; border-radius: 50%; background: #ff8c1a; box-shadow: 0 0 12px #ff8c1a; }
    @keyframes copilotOrbit { to { transform: rotate(360deg); } }
    #ppage .copilot-mail { position: relative; z-index: 2; width: 100%; max-width: 430px; overflow: hidden; border-radius: 16px; background: #fff; box-shadow: 0 34px 80px -20px rgba(4,30,66,.34); animation: copilotFloat 6s ease-in-out infinite; }
    @keyframes copilotFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-11px); } }
    #ppage .copilot-mail-bar { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-bottom: 1px solid #dce5f2; background: #f3f6fc; }
    #ppage .copilot-mail-bar .dots { display: flex; gap: 6px; }
    #ppage .copilot-mail-bar .dots i { width: 10px; height: 10px; border-radius: 50%; background: #d3ddef; }
    #ppage .copilot-mail-title { display: flex; align-items: center; gap: 6px; color: #51607a; font: 400 12px var(--mono); letter-spacing: .05em; }
    #ppage .copilot-mini-mark { display: grid; place-items: center; width: 16px; height: 16px; border-radius: 4px; background: conic-gradient(from 180deg,#0b6dff,#33c1ff,#7c4dff,#0b6dff); color: #fff; font-size: 9px; }
    #ppage .copilot-mail-body { position: relative; display: flex; flex-direction: column; gap: 10px; padding: 14px; background: #fff; }
    #ppage .copilot-scanline { position: absolute; right: 0; left: 0; z-index: 0; height: 80px; background: linear-gradient(180deg,transparent,rgba(90,150,255,.13),transparent); animation: copilotScan 4.5s linear infinite; }
    @keyframes copilotScan { from { top: -80px; } to { top: 100%; } }
    #ppage .copilot-mrow { position: relative; z-index: 1; display: flex; align-items: flex-start; gap: 12px; padding: 11px 12px; border: 1px solid #dce5f2; border-radius: 12px; background: #fff; }
    #ppage .copilot-mrow.hot { border-color: #bcd3f7; background: linear-gradient(90deg,#f5f9ff,#fff); box-shadow: 0 10px 24px -14px rgba(21,101,216,.65); }
    #ppage .copilot-mav { display: grid; place-items: center; flex: none; width: 38px; height: 38px; border-radius: 50%; background: conic-gradient(from 180deg,#0b6dff,#33c1ff,#7c4dff,#0b6dff); }
    #ppage .copilot-mav.doc { background: #57a94a; }
    #ppage .copilot-mav svg { width: 20px; height: 20px; }
    #ppage .copilot-mtx { min-width: 0; }
    #ppage .copilot-mtx b { display: block; color: #041e42; font: 700 14px var(--disp); }
    #ppage .copilot-mtx span { display: block; max-width: 230px; overflow: hidden; color: #51607a; font-size: 12px; text-overflow: ellipsis; white-space: nowrap; }
    #ppage .copilot-float-card { position: absolute; z-index: 4; display: flex; align-items: center; gap: 10px; padding: 11px 14px; border-radius: 13px; background: #fff; box-shadow: 0 18px 50px rgba(4,30,66,.1); }
    #ppage .copilot-float-card .fi { display: grid; place-items: center; flex: none; width: 32px; height: 32px; border-radius: 9px; font-style: normal; }
    #ppage .copilot-float-card b, #ppage .copilot-float-card span { display: block; }
    #ppage .copilot-float-card b { color: #041e42; font: 700 13px/1.2 var(--disp); }
    #ppage .copilot-float-card div span { color: #51607a; font: 400 10px var(--mono); }
    #ppage .copilot-float-card.ask { top: -30px; left: -16px; animation: copilotFloat 7s ease-in-out infinite; } #ppage .copilot-float-card.ask .fi { background: #e4f7ec; color: #16a34a; }
    #ppage .copilot-float-card.seconds { right: -26px; bottom: 12%; animation: copilotFloat 8s ease-in-out infinite; } #ppage .copilot-float-card.seconds .fi { background: #e8f0fd; color: #1565d8; }
    #ppage .copilot-float-card.secure { top: 2%; right: -26px; animation: copilotFloat 6.5s ease-in-out infinite; } #ppage .copilot-float-card.secure .fi { background: #fff3e0; color: #ff8c1a; }
    #ppage .copilot-powered { position: absolute; bottom: -16px; left: 50%; z-index: 6; min-width: 145px; padding: 11px 22px; transform: translateX(-50%); border-radius: 14px; background: #fff; box-shadow: 0 34px 80px -20px rgba(4,30,66,.34); text-align: center; }
    #ppage .copilot-powered>small { display: block; margin-bottom: 3px; color: #51607a; font: 400 9.5px var(--mono); letter-spacing: .14em; text-transform: uppercase; }
    #ppage .copilot-ms-badge { display: inline-flex; align-items: center; gap: 8px; color: #041e42; font: 700 16px var(--disp); }
    #ppage .ms-squares { display: grid; grid-template: 1fr 1fr/1fr 1fr; gap: 2px; width: 22px; height: 22px; }
    #ppage .ms-squares i:nth-child(1) { background: #f25022; } #ppage .ms-squares i:nth-child(2) { background: #7fba00; } #ppage .ms-squares i:nth-child(3) { background: #00a4ef; } #ppage .ms-squares i:nth-child(4) { background: #ffb900; }
    #ppage .pph-scene.pph-email-signature {
      top: calc(4% + 48px); right: 3%; bottom: auto; width: 40%; display: flex;
      align-items: center; justify-content: center; opacity: 1; overflow: visible;
      mask-image: none;
    }
    #ppage .pph-scene.pph-autonomous-threat-solution {
      top: 0; right: 1%; bottom: auto; width: 48%; height: 100%; display: flex;
      align-items: center; justify-content: center; opacity: 1; overflow: visible;
      mask-image: none;
    }
    #ppage .pph-scene.pph-entra-id-backup {
      top: 1%; right: 1%; bottom: auto; width: 48%; height: 96%; display: flex;
      align-items: center; justify-content: center; opacity: 1; overflow: visible;
      mask-image: none;
    }
    #ppage .pph-scene.pph-entra-id-backup xh-entra-id-backup-hero { width: 100%; }
    #ppage .entra-backup-hero-summary { max-width: 54ch; }
    #ppage .pph-scene.pph-bare-metal {
      top: 1%; right: 1%; bottom: auto; width: 48%; height: 96%; display: flex;
      align-items: center; justify-content: center; opacity: 1; overflow: visible;
      mask-image: none;
    }
    #ppage .pph-scene.pph-bare-metal xh-bare-metal-content { width: 100%; }
    #ppage .pp-hero > .wrap > .bare-metal-hero-summary {
      position: relative; z-index: 3; box-sizing: border-box;
      width: min(46%, 560px); max-width: 52ch !important;
      line-height: 1.58; overflow-wrap: break-word; text-wrap: pretty;
    }
    #ppage .pph-scene.genai-protection-hero-art {
      top: 4%; right: 1.5%; bottom: auto; width: min(47%, 640px); height: 92%;
      overflow: visible; opacity: 1; border: 0; border-radius: 0; background: transparent;
      box-shadow: none; mask-image: none;
    }
    #ppage .pph-scene.genai-protection-hero-art xh-genai-protection-content {
      position: absolute; inset: 0; display: block;
    }
    #ppage .genai-hero-summary {
      width: 48%; max-width: 540px !important; text-wrap: pretty;
    }
    #ppage.atm-solution-page > .pp-hero { min-height: 660px; }
    #ppage.atm-solution-page .pp-hero h1 { font-size: clamp(19px, 2.2vw, 28px); }
    #ppage.atm-solution-page .pp-hero > .wrap > h1 { max-width: 58%; white-space: normal; }
    #ppage.atm-solution-page .pp-tagline { color: #67b7ff; }
    #ppage.atm-solution-page .pp-tagline-support { color: #fff; }
    #ppage .atm-demo-preview { max-width: 760px; margin-inline: auto; }
    #ppage .atm-demo-preview .tally-video-frame { min-height: 360px; background: #041e42; }
    #ppage .atm-demo-preview > .btn { align-self: center; margin: 18px auto 4px; }
    #ppage .atm-default-overview { padding-bottom: 18px; }
    #ppage .atm-default-overview .pp-sec { margin-top: 0; }
    #ppage .atm-default-overview .pp-ov {
      width: 100%; max-width: 100%; margin-top: 10px; margin-bottom: 0;
    }
    #ppage .pph-digicert-brand strong {
      color: #0f5b9e; font: 700 22px/1 var(--disp); letter-spacing: -.03em;
    }
    #ppage .pph-digicert-brand sup { font-size: 9px; vertical-align: super; }
    @media (max-width: 900px) {
      #ppage .copilot-hero-copy { max-width: none; padding: 68px 0 410px; }
      #ppage .copilot-hero-art { top: auto; right: 8%; bottom: 35px; width: 84%; }
      #ppage .pph-scene.pph-email-signature {
        position: relative; top: auto; right: auto; width: 100%;
        max-width: 460px; margin: 48px auto 32px;
      }
      #ppage .pph-scene.pph-autonomous-threat-solution {
        position: absolute; top: 0; right: 0; width: 100%; height: 100%;
        opacity: .16; overflow: hidden;
      }
      #ppage .pph-scene.pph-entra-id-backup {
        position: absolute; top: 0; right: 0; width: 100%; height: 100%;
        opacity: .16; overflow: hidden;
      }
      #ppage .pph-scene.pph-bare-metal {
        position: absolute; top: 0; right: 0; width: 100%; height: 100%;
        opacity: .16; overflow: hidden;
      }
      #ppage .pp-hero > .wrap > .bare-metal-hero-summary {
        width: 100%; max-width: 58ch !important;
      }
      #ppage .pph-scene.genai-protection-hero-art {
        top: auto; right: 2%; bottom: 2%; width: 48%; height: 58%; opacity: .24;
      }
      #ppage .genai-hero-summary { width: 100%; max-width: 58ch !important; }
    }
    @media (max-width: 560px) {
      #ppage .copilot-hero-points { grid-template-columns: 1fr; }
      #ppage .copilot-hero-copy { padding-bottom: 390px; }
      #ppage .copilot-hero-art { right: 4%; width: 92%; }
    }

    /* RTX 8000 desktop hero geometry shared by every product page. */
    @media (min-width: 901px) {
      #ppage .pp-hero {
        box-sizing: border-box;
        min-height: 510px;
        padding: 50px 0 54px;
      }
      #ppage .pp-hero > .wrap {
        width: 100%;
        max-width: 1240px;
        margin-inline: auto;
        padding-inline: 24px;
      }
      #ppage .pp-hero > .wrap > .pp-crumb,
      #ppage .pp-hero > .wrap > h1,
      #ppage .pp-hero > .wrap > .pp-tagline,
      #ppage .pp-hero > .wrap > .pp-tagline-support,
      #ppage .pp-hero > .wrap > .pp-chips,
      #ppage .pp-hero > .wrap > .pp-hero-grid {
        max-width: 58%;
      }
      #ppage .pp-hero > .wrap > h1,
      #ppage .pp-hero #ppTitle {
        max-width: 100%;
        margin-bottom: 14px;
        font-size: clamp(27px, 3vw, 40px);
        line-height: 1.12;
        white-space: normal;
      }
      #ppage .pp-title-name { white-space: normal; }
      #ppage .pp-hero > .wrap > .pp-tagline {
        max-width: 680px;
        margin-bottom: 4px;
        font-weight: 650;
        line-height: 1.4;
      }
      #ppage .pp-hero > .wrap > .pp-tagline-support {
        max-width: 680px;
        margin-bottom: 14px;
        color: #fff;
        font: 500 16px/1.5 var(--body);
      }
      #ppage .pp-hpoints {
        grid-template-columns: repeat(2, max-content);
        gap: 11px 27px;
        margin: 9px 0 23px;
      }
      #ppage .pp-hpoint { font-size: 14px; }
      #ppage .product-hero-ctas { gap: 12px; }
      #ppage .product-hero-ctas .btn { min-height: 46px; }
      #ppage .pp-ask-ai {
        margin-top: 24px;
        padding: 20px 0 0;
        border: 0;
        border-top: 1px solid rgba(144, 180, 233, .25);
        border-radius: 0;
        background: none;
      }
      #ppage .pp-ask-ai-kicker {
        padding: 7px 11px;
        border: 1px solid rgba(75, 165, 255, .32);
        border-radius: 999px;
        background: rgba(8, 31, 68, .46);
      }
      #ppage .pp-ask-ai-chip {
        border: 1px solid rgba(161, 184, 219, .28);
        border-radius: 12px;
        background: rgba(11, 24, 53, .58);
      }
      #ppage .pph-scene { max-height: 510px; }
      #ppage .pph-scene.has-illus {
        top: 0;
        bottom: 0;
        height: 100%;
        align-items: center;
      }
      #ppage.tally-page .pph-scene.has-illus.standalone-illus {
        top: 0;
        bottom: 0;
        height: 100%;
        transform: none;
        overflow: hidden;
      }
    }

    @media (min-width: 901px) and (max-width: 1180px) {
      #ppage .pp-hero > .wrap { padding-inline: 28px; }
      #ppage .pp-hero > .wrap > .pp-crumb,
      #ppage .pp-hero > .wrap > h1,
      #ppage .pp-hero > .wrap > .pp-tagline,
      #ppage .pp-hero > .wrap > .pp-tagline-support,
      #ppage .pp-hero > .wrap > .pp-chips,
      #ppage .pp-hero > .wrap > .pp-hero-grid { max-width: 56%; }
      #ppage .pp-hero > .wrap > h1,
      #ppage .pp-hero #ppTitle { font-size: clamp(27px, 3.2vw, 35px); }
      #ppage .pph-scene { width: 44%; }
      #ppage .product-hero-ctas { gap: 8px; }
      #ppage .product-hero-ctas .btn { padding-inline: 13px; font-size: 12px; }
      #ppage .pp-hpoints { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 16px; }
    }

    @media (min-width: 901px) and (max-width: 1050px) {
      #ppage .product-hero-ctas {
        width: 100%;
        max-width: 100%;
        flex-wrap: wrap;
      }
      #ppage .product-hero-ctas .btn { min-height: 42px; padding-inline: 11px; }
      #ppage .pp-ask-ai { margin-top: 18px; }
      #ppage .pph-scene { right: -2%; width: 43%; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPage {
  private readonly topics = inject(CallbackTopicService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly catalog = inject(CatalogService);
  private readonly products = inject(ProductPageService);
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly docs = inject(DocRequestService);
  private readonly leads = inject(LeadService);
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);

  /** five star slots, so the template does not rebuild an array on every check */
  readonly starSlots = [0, 1, 2, 3, 4];
  readonly suppliedServiceExtras = computed(() =>
    this.slug() === 'server-management'
      ? SUPPLIED_SERVICE_EXTRAS['server-management']
      : SUPPLIED_SERVICE_EXTRAS['cloud-devops-services'],
  );
  readonly suppliedServiceName = computed(() =>
    this.slug() === 'server-management' ? 'Server Management' : 'Cloud DevOps Services',
  );
  readonly microsoftEnterpriseSecurity = {
    intro: 'Set a consistent security baseline across identities, devices, email and data. XcellHost helps configure the Microsoft 365 controls included in your chosen licences and align them with your policies.',
    rows: [
      ['Identity', 'Microsoft Entra ID, multifactor authentication and Conditional Access'],
      ['Devices', 'Microsoft Intune enrolment, configuration and compliance policies'],
      ['Threat protection', 'Microsoft Defender policies for email, endpoints and identities where licensed'],
      ['Information protection', 'Microsoft Purview sensitivity labels, retention and data loss prevention where licensed'],
      ['Operations', 'Monitoring, policy reviews and managed support from XcellHost'],
    ],
  };
  readonly microsoftEnterpriseWhy = [
    { title: 'Right-sized licensing', body: 'Choose a mix of E3, E5 and Frontline licences for the roles in your organisation.', icon: 'M4 6h16M4 12h16M4 18h16M8 3v18' },
    { title: 'Migration support', body: 'Plan and deliver mailbox and collaboration migration in controlled waves.', icon: 'M4 7h13M14 4l3 3-3 3M20 17H7m3-3-3 3 3 3' },
    { title: 'Security rollout', body: 'Configure Entra ID, Intune, Defender and Purview controls for your licence mix.', icon: 'M12 2l8 3v6c0 5-3 9-8 11-5-2-8-6-8-11V5l8-3zM9 12l2 2 4-4' },
    { title: 'Teams adoption', body: 'Support collaboration, calling and user onboarding across locations.', icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M17 8h5M19.5 5.5v5' },
    { title: 'Local billing', body: 'Work with an India-based partner for INR quotes and GST invoicing.', icon: 'M4 3h16v18H4zM8 8h8M8 12h8M8 16h5' },
    { title: 'Ongoing support', body: 'Get help with administration, changes and service issues after deployment.', icon: 'M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 1-2zM20 14h-3v6h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-1-2z' },
  ];
  readonly microsoftEnterpriseFaqs: Faq[] = [
    ['How do we choose between E3, E5 and Frontline?', 'The right mix depends on each user group and its productivity, security and compliance needs. XcellHost can review your roles and propose a licence mix before deployment.'],
    ['Can we use different Microsoft 365 plans in one organisation?', 'Yes. Eligible E-series and Frontline licences can be assigned to different users in the same tenant, subject to Microsoft licensing terms.'],
    ['Can XcellHost migrate us from another email platform?', 'XcellHost can assess your current email and collaboration environment, plan a staged migration and validate the cutover with your team.'],
    ['Which security features are included?', 'Capabilities vary by plan. Entra ID, Intune, Defender and Purview features should be checked against the licences selected for each user.'],
    ['What happens after deployment?', 'XcellHost can provide administration, monitoring, user support and ongoing changes through a managed service arrangement.'],
  ];
  readonly migrationPrinciples = [
    { title: 'Risk aware', body: 'We identify risks early and plan for every scenario.', icon: 'M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L14.4 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01' },
    { title: 'Business focused', body: 'Migration windows and cutover plans aligned to your business.', icon: 'M12 6v6l4 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z' },
    { title: 'Secure by design', body: 'Security and compliance built in at every step.', icon: 'M3 11h18v11H3zM7 11V7a5 5 0 0 1 10 0v4' },
    { title: 'Complete visibility', body: 'Real-time tracking and reporting throughout the journey.', icon: 'M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z' },
    { title: 'Expert support', body: 'Experienced cloud engineers with you from start to end.', icon: 'M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.8 2z' },
  ];
  readonly migrationBeforeGroups = [
    { title: 'Users & Locations', items: ['Head Office', 'Branch Offices', 'Remote Users', 'Third Parties'] },
    { title: 'Application Layer', items: ['Legacy Apps', 'ERP / CRM', 'Web Apps', 'Custom Apps'] },
    { title: 'Infrastructure', items: ['On-prem DC', 'Private Cloud', 'VMware', 'Public Cloud'] },
    { title: 'Data & Infrastructure', items: ['Servers', 'Storage', 'Databases', 'Backups'] },
  ];
  readonly migrationChallenges = [
    'High & unpredictable costs', 'Limited visibility', 'Slow provisioning',
    'Siloed management', 'Inconsistent security', 'Backup gaps',
    'Complex integrations', 'Manual operations', 'Compliance burdens',
  ];
  readonly migrationJourney = [
    { title: 'Discover', body: 'Assess workloads, dependencies & risks' },
    { title: 'Design', body: 'Build target architecture & migration plan' },
    { title: 'Migrate', body: 'Move workloads in controlled waves' },
    { title: 'Validate', body: 'Test, validate & optimise before cutover' },
    { title: 'Cutover', body: 'Seamless transition with minimal downtime' },
  ];
  readonly migrationAfterGroups = [
    { title: 'Users & Experience', items: ['Employees', 'Partners', 'Customers', 'Applications'] },
    { title: 'Application Experience', items: ['Modern Apps', 'Legacy Apps', 'VDI / Workspace', 'APIs & Integration'] },
    { title: 'XcellHost Cloud', items: ['Core Cloud', 'Prime Cloud', 'GPU Cloud', 'Kubernetes & PaaS'], accent: true },
    { title: 'Data & Services', items: ['Databases', 'Storage', 'Backup & DR', 'CDN & LB', 'Virtual Networks'] },
    { title: 'Security & Management', items: ['Security', 'IAM & Access', 'Observability', 'Compliance', 'Monitoring', 'Automation'] },
    { title: 'Managed Operations', items: ['24×7 Monitoring', 'SLA Support', 'Cost Optimisation', 'Capacity Planning'] },
  ];
  readonly migrationValueAdds = [
    { title: 'Predictable Costs', body: 'Flat, transparent pricing with no surprises.', icon: ['M6 3h12M6 8h12M14 3c0 5-4 6-8 6l7 9'] },
    { title: 'Simplified Operations', body: 'Unified management from a single console.', icon: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82A1.65 1.65 0 0 0 3.17 14H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09A1.65 1.65 0 0 0 19.4 15z'] },
    { title: 'Stronger Security', body: 'Built-in security, compliance & data sovereignty.', icon: ['M12 2l8 3v6c0 5.5-3.5 9.7-8 11-4.5-1.3-8-5.5-8-11V5l8-3z', 'M9 12l2 2 4-4'] },
    { title: 'High Performance', body: 'Optimised infrastructure for modern workloads.', icon: ['M13 2L3 14h7l-1 8 10-12h-7l1-8z'] },
    { title: 'Built-in Resilience', body: 'Backup, DR & HA designed into the platform.', icon: ['M23 4v6h-6M1 20v-6h6', 'M3.5 9a9 9 0 0 1 15-3.4L23 10M1 14l4.5 4.4A9 9 0 0 0 20.5 15'] },
    { title: 'Business Agility', body: 'Provision faster. Scale easier. Innovate sooner.', icon: ['M3 3v18h18', 'M7 15l4-4 3 3 5-6'] },
  ];
  readonly migrationScenarios = [
    { title: 'VMware exit / optimisation', body: 'Reassess VMware and move workloads across without unnecessary redesign.', destination: 'XcellHost Cloud · Prime Cloud · Private Cloud', sector: 'Manufacturing', project: 'VMware to XcellHost migration', outcome: '250+ VMs migrated · Zero downtime', metric: '40%', metricLabel: 'Cost optimisation', tags: ['Cost Optimisation', 'Performance', 'Operational Efficiency'] },
    { title: 'Public-cloud repatriation', body: 'Cut cost and regain control of predictable workloads running on public cloud.', destination: 'Prime Cloud · Regional Cloud · Private Cloud', sector: 'Public Sector', project: 'Public cloud to XcellHost repatriation', outcome: 'Multi-tier · Compliance-ready', metric: '50%', metricLabel: 'Cost savings', tags: ['Cost Savings', 'Sovereignty & Control', 'Compliance'] },
    { title: 'Legacy application modernisation', body: 'Move legacy applications to modern infrastructure and deliver secure access to users.', destination: 'Core / Prime Cloud + app delivery', sector: 'Retail', project: 'Legacy POS to modern platform', outcome: '120+ VMs migrated · Seamless cutover', metric: '99.9%', metricLabel: 'Availability', tags: ['High Availability', 'User Experience', 'Modernisation'] },
    { title: 'Database migration', body: 'Move databases with controlled downtime and post-migration validation.', destination: 'PostgreSQL · MySQL · MSSQL · Oracle · HANA', sector: 'Healthcare', project: 'Oracle to PostgreSQL migration', outcome: '2 TB+ data migrated · Improved performance', metric: '40%', metricLabel: 'Faster reporting', tags: ['Performance', 'Reliability', 'Cost Optimisation'] },
    { title: 'Data-centre exit', body: 'Consolidate or exit data centres in a structured, low-risk manner.', destination: 'XcellHost Cloud · Private Cloud · Archive', sector: 'Logistics', project: 'Dual data centre consolidation', outcome: '180+ VMs moved in structured waves', metric: '45%', metricLabel: 'Footprint reduction', tags: ['Cost Optimisation', 'Operational Simplicity', 'Scalability'] },
    { title: 'Business-continuity transformation', body: 'Migrate and improve resilience with backup and disaster recovery built in.', destination: 'XcellHost Cloud · Backup · Disaster Recovery', sector: 'Insurance', project: 'DR platform modernisation', outcome: 'Backup & DR built in from day one', metric: '15 min', metricLabel: 'RPO achieved', tags: ['Resilience', 'Risk Reduction', 'Business Continuity'] },
  ];
  readonly migrationAssessmentPoints = [
    { title: 'What should move', body: 'Workload classification' },
    { title: 'Where it should move', body: 'Target architecture' },
    { title: 'How it should move', body: 'Migration method' },
    { title: 'When it should move', body: 'Migration waves' },
    { title: 'What it should cost', body: 'Target infrastructure & commercial model' },
    { title: 'What could go wrong', body: 'Dependencies & migration risks' },
  ];

  readonly edrPlanCoverage = ['15 months coverage', '30 months coverage', '48 months coverage'];
  readonly edrPlanFeatures = [
    'Advanced Security + EDR licence',
    'Behavioral and AI-based detection',
    'Anti-ransomware protection with rollback',
    'Exploit prevention and URL filtering',
    'Continuous endpoint monitoring',
    'Endpoint isolation and response actions',
    'Free deployment and onboarding',
    'XcellHost engineer support',
  ];

  readonly rmmPlanFeatures = [
    'Device discovery and asset management',
    'Vulnerability assessment and patch management',
    'System and hardware monitoring',
    'AI-assisted scripting and automation',
    'Software deployment with DeployPilot',
    'Remote desktop and assistance',
    'Microsoft 365 security posture management',
    'XcellHost engineer support',
  ];

  readonly selectedEdrPlanIndex = signal(0);
  readonly edrQuantity = signal(1);
  readonly cdrQuantity = signal(1);
  readonly cloudDriveQuantity = signal(1);
  readonly activeCdrTourSlide = signal(0);
  readonly cdrTourSlides = [
    {
      title: 'Recovery cloud infrastructure',
      description: 'Track reserved compute, memory, storage, virtual-machine status and capacity across the recovery environment.',
      image: '/assets/images/cdr-smb-infrastructure.webp',
    },
  ] as const;
  readonly isCdrTourOpen = computed(() => this.overlay.isOpen('screenshotTour'));
  readonly activeGenAiTourSlide = signal(0);
  readonly genAiTourSlides = [
    { title: 'GenAI usage reports', description: 'Review generative AI activity, application usage and sensitive-data trends across protected devices.', image: '/assets/images/genai-tour-reports.png' },
    { title: 'Sensitive-data protection', description: 'See how policy controls can stop sensitive data from being shared through public GenAI tools.', image: '/assets/images/genai-tour-protection.png' },
    { title: 'GenAI protection events', description: 'Track allowed and blocked events with the device, application and event status in one view.', image: '/assets/images/genai-tour-events.png' },
    { title: 'Data flow policy', description: 'Define rules for sensitive information and control how data can move between users and destinations.', image: '/assets/images/genai-tour-policy.png' },
  ] as const;
  readonly isGenAiTourOpen = computed(() => this.overlay.isOpen('genAiScreenshotTour'));
  readonly activeRmmTourSlide = signal(0);
  readonly rmmTourSlides = [
    {
      title: 'Patch management dashboard',
      description: 'Review available patches, their severity, and endpoint health from a single management view.',
      image: '/assets/images/rmm-tour-patches.png',
    },
    {
      title: 'Security posture',
      description: 'Monitor security baselines, configuration risks and user account health across your organization.',
      image: '/assets/images/rmm-tour-security-posture.png',
    },
  ] as const;
  readonly isRmmTourOpen = computed(() => this.overlay.isOpen('rmmScreenshotTour'));
  readonly activeEdrTourSlide = signal(0);
  readonly edrTourSlides: readonly ProductTourSlide[] = [
    {
      title: 'Live incident investigation',
      description: 'Trace the complete cyber kill chain, inspect affected workloads and review malicious processes from one incident view.',
      image: '/assets/images/advanced-security-edr-live-incident.webp',
    },
    {
      title: 'Guided incident remediation',
      description: 'Stop and quarantine threats, roll back malicious changes, recover workloads and add detections to the blocklist.',
      image: '/assets/images/advanced-security-edr-remediation.webp',
    },
    {
      title: 'Generative AI usage overview',
      description: 'Monitor generative AI visits, applications and device activity through a central security dashboard.',
      image: '/assets/images/advanced-security-edr-genai-overview.webp',
    },
    {
      title: 'Attack-stage analysis',
      description: 'Review execution, persistence and defence-evasion activity as a clear timeline linked to the process tree.',
      image: '/assets/images/advanced-security-edr-attack-stages.webp',
    },
  ];
  readonly isEdrTourOpen = computed(() => this.overlay.isOpen('edrScreenshotTour'));
  readonly activeProductTourSlide = signal(0);
  readonly isProductTourOpen = computed(() => this.overlay.isOpen('productScreenshotTour'));
  readonly whatsAppSmbTourSlides: readonly ProductTourSlide[] = [
    { title: 'Workflow dashboard', description: 'Review and manage WhatsApp automation workflows from one place.', image: '/assets/images/whatsapp-smb-tour-1.png' },
    { title: 'Capture trigger responses', description: 'Save message-trigger responses into customer traits or workflow variables.', image: '/assets/images/whatsapp-smb-tour-2.png' },
    { title: 'AI intent and keyword matching', description: 'Start automations from exact, partial or AI-matched customer messages.', image: '/assets/images/whatsapp-smb-tour-3.png' },
    { title: 'Campaign response triggers', description: 'Continue a workflow when a customer replies to a campaign or selects a button.', image: '/assets/images/whatsapp-smb-tour-4.png' },
    { title: 'No-code workflow builder', description: 'Build and configure multi-step customer journeys on a visual canvas.', image: '/assets/images/whatsapp-smb-tour-5.png' },
    { title: 'Rich message attachments', description: 'Add videos and other supported media to automated WhatsApp messages.', image: '/assets/images/whatsapp-smb-tour-6.png' },
    { title: 'Reusable message actions', description: 'Edit, duplicate, delete or reuse nodes while building a workflow.', image: '/assets/images/whatsapp-smb-tour-7.png' },
    { title: 'Personalised variables', description: 'Personalise messages with customer details and workflow variables.', image: '/assets/images/whatsapp-smb-tour-8.png' },
    { title: 'Interactive lists', description: 'Give customers structured choices with list-based message actions.', image: '/assets/images/whatsapp-smb-tour-9.png' },
    { title: 'Webhooks and error handling', description: 'Connect external services and define safe responses when an integration fails.', image: '/assets/images/whatsapp-smb-tour-10.png' },
  ];
  readonly acronisTrueImageTourSlides: readonly ProductTourSlide[] = [
    {
      title: 'Easy management',
      description: 'Manage protection, detected issues, quarantine and exclusions from one clear dashboard.',
      image: '/assets/images/Easy-Management.png',
    },
    {
      title: 'Cybersecurity',
      description: 'Monitor active protection, antivirus scans and vulnerability assessments in one place.',
      image: '/assets/images/Cybersecurity.png',
    },
    {
      title: 'Backup',
      description: 'Choose what to protect, from an entire PC or disk to individual files and folders.',
      image: '/assets/images/Backup.png',
    },
  ];
  readonly microsoft365BackupTourSlides: readonly ProductTourSlide[] = [
    {
      title: 'Why Microsoft 365 data needs protection',
      description: 'Understand the scale of Microsoft 365 usage and the growing need for an additional data-protection layer.',
      image: '/assets/images/microsoft-365-backup-tour-1.jpg',
    },
    {
      title: 'Microsoft shared responsibility model',
      description: 'See which infrastructure responsibilities belong to Microsoft and which data-protection responsibilities remain with your organization.',
      image: '/assets/images/microsoft-365-backup-tour-2.jpg',
    },
    {
      title: 'Close Microsoft 365 protection gaps',
      description: 'Address data-protection, security and compliance risks with backup, immutable storage and reporting.',
      image: '/assets/images/microsoft-365-backup-tour-3.jpg',
    },
    {
      title: 'Acronis backup and data protection',
      description: 'Explore data control, rapid recovery, scalability and cost-efficiency benefits for Microsoft 365 workloads.',
      image: '/assets/images/microsoft-365-backup-tour-4.jpg',
    },
    {
      title: 'Additional protection layers',
      description: 'Extend backup with email security, anti-ransomware, endpoint management and endpoint protection.',
      image: '/assets/images/microsoft-365-backup-tour-5.jpg',
    },
    {
      title: 'Advantages of a managed service',
      description: 'Review the expertise, support, tools, compliance and predictable operations included with managed backup.',
      image: '/assets/images/microsoft-365-backup-tour-6.jpg',
    },
    {
      title: 'Entra ID backup',
      description: 'Protect identities, roles, policies and other Entra ID objects with point-in-time recovery.',
      image: '/assets/images/microsoft-365-backup-tour-7.jpg',
    },
  ];
  readonly vmcTourSlides: readonly ProductTourSlide[] = [
    {
      title: 'Inbox branding before and after VMC',
      description: 'Compare a standard inbox with the branded sender logos and verification indicators shown after VMC and BIMI deployment.',
      image: '/assets/images/vmc-tour-before-after.png',
    },
    {
      title: 'Verified mark across inbox experiences',
      description: 'See how a verified brand mark helps recipients recognise authenticated email on desktop and mobile.',
      image: '/assets/images/vmc-tour-verified-mark.png',
    },
  ];
  readonly tsplusServerMonitoringTourSlides: readonly ProductTourSlide[] = [
    {
      title: 'Real-time server dashboard',
      description: 'Review live CPU, memory, disk-read and disk-write performance across monitored servers.',
      image: '/assets/images/tsplus-server-monitoring-tour-dashboard.png',
    },
    {
      title: 'Server reports and scheduling',
      description: 'Build, customise, export and schedule performance, availability and application-usage reports.',
      image: '/assets/images/tsplus-server-monitoring-tour-reports.png',
    },
    {
      title: 'Website availability history',
      description: 'Track website availability and response performance over time from a central dashboard.',
      image: '/assets/images/tsplus-server-monitoring-tour-websites.png',
    },
    {
      title: 'Alert management',
      description: 'Configure and manage threshold alerts for server resources and monitored websites.',
      image: '/assets/images/tsplus-server-monitoring-tour-alerts.png',
    },
  ];

  readonly tsplusRemoteSupportTourSlides: readonly ProductTourSlide[] = [
    {
      title: 'Remote support on Windows',
      description: 'Share your screen or start a remote-control session from the Windows client.',
      image: '/assets/images/tsplus-remote-support-tour-windows.png',
    },
    {
      title: 'Remote support on macOS',
      description: 'Share access details and connect to a remote computer from your Mac.',
      image: '/assets/images/tsplus-remote-support-tour-macos.png',
    },
    {
      title: 'Remote support on Android',
      description: 'Connect to a remote desktop and chat with users from the Android app.',
      image: '/assets/images/tsplus-remote-support-tour-mobile.png',
    },
  ];

  readonly tsplusAdvancedSecurityTourSlides: readonly ProductTourSlide[] = [
    { title: 'Advanced Security dashboard', description: 'Monitor incoming connections and review security events from one dashboard.', image: '/assets/images/tsplus-advanced-security-tour-dashboard.png' },
    { title: 'Firewall brute-force protection', description: 'Set failed-login thresholds and automatically block attacking IP addresses.', image: '/assets/images/tsplus-advanced-security-tour-firewall.png' },
    { title: 'Geographic protection', description: 'Allow remote connections only from trusted countries and approved addresses.', image: '/assets/images/tsplus-advanced-security-tour-geographic.png' },
    { title: 'Working-hours controls', description: 'Authorize user and group access only during approved time ranges.', image: '/assets/images/tsplus-advanced-security-tour-sessions.png' },
  ];

  readonly managedAwsTourSlides: readonly ProductTourSlide[] = [
    { title: 'AWS operations overview', description: 'Monitor workload health, availability and active alerts across the managed environment.', image: '/assets/images/managed-aws-tour-operations.svg' },
    { title: 'Security and compliance', description: 'Review security posture, patching, backups and compliance controls in one view.', image: '/assets/images/managed-aws-tour-security.svg' },
    { title: 'Cost optimisation', description: 'Track spend, savings opportunities and the impact of ongoing right-sizing.', image: '/assets/images/managed-aws-tour-cost.svg' },
  ];
  readonly managedAzureTourSlides: readonly ProductTourSlide[] = [
    { title: 'Azure operations overview', description: 'Monitor virtual machines, Azure SQL, storage, availability and active alerts.', image: '/assets/images/managed-azure-tour-operations.svg' },
    { title: 'Azure security and compliance', description: 'Review identity, patching, backup and compliance posture.', image: '/assets/images/managed-azure-tour-security.svg' },
    { title: 'Azure cost optimisation', description: 'Track monthly spend, realised savings and right-sizing opportunities.', image: '/assets/images/managed-azure-tour-cost.svg' },
  ];

  readonly tsplusRemoteAccessTourSlides: readonly ProductTourSlide[] = [
    { title: 'Remote Access portal', description: 'Give users secure browser access to published applications and desktops.', image: '/assets/images/tsplus-remote-access-tour-portal.png' },
    { title: 'Remote Access console', description: 'Manage servers, users, applications and security from one administration console.', image: '/assets/images/tsplus-remote-access-tour-console.png' },
    { title: 'Business dashboard', description: 'Review usage, activity and service status at a glance.', image: '/assets/images/tsplus-remote-access-tour-dashboard.png' },
    { title: 'Published business application', description: 'Run accounting and ERP applications remotely from a familiar Windows interface.', image: '/assets/images/tsplus-remote-access-tour-erp.png' },
    { title: 'Remote session', description: 'Connect to a remote Windows desktop securely when full desktop access is needed.', image: '/assets/images/tsplus-remote-access-tour-session.png' },
    { title: 'Secure sign-in', description: 'Keep Windows credentials protected while users connect to their assigned resources.', image: '/assets/images/tsplus-remote-access-tour-credentials.png' },
  ];
  readonly resellerProgramTourSlides: readonly ProductTourSlide[] = [
    { title: 'Partner dashboard', description: 'Track clients, renewals and recurring commissions.', image: '/assets/images/reseller-tour-dashboard.svg' },
    { title: 'Service catalogue', description: 'Browse and provision more than 100 services at partner rates.', image: '/assets/images/reseller-tour-catalogue.svg' },
    { title: 'Clients and billing', description: 'Manage white-label billing and GST invoices.', image: '/assets/images/reseller-tour-billing.svg' },
  ];

  readonly tsplusRemoteAccessExperiences = [
    {
      title: 'RDP – Full Desktop Standard MSTSC',
      description: 'The user accesses the full desktop via the standard Microsoft RDP client.',
      video: '/assets/video/tsplus-ra-rdp-standard.mp4',
    },
    {
      title: 'RDP – Full Desktop 1-click Connection',
      description: 'The user accesses the full desktop via the TSplus Client in one click.',
      video: '/assets/video/tsplus-ra-rdp-one-click.mp4',
    },
    {
      title: 'RemoteApp – Floating Panel',
      description: 'The user launches an app in one click from the floating panel on their local desktop.',
      video: '/assets/video/tsplus-ra-remoteapp-floating-panel.mp4',
    },
    {
      title: 'RemoteApp – Application Panel',
      description: 'The user launches an app in one click from the application panel on their local desktop.',
      video: '/assets/video/tsplus-ra-remoteapp-application-panel.mp4',
    },
    {
      title: 'RemoteApp – Single Application Launch',
      description: 'The application starts automatically when the user connects.',
      video: '/assets/video/tsplus-ra-remoteapp-single-app.mp4',
    },
    {
      title: 'HTML5 – Full Desktop',
      description: 'The user signs in through the web portal and accesses the full desktop in any browser.',
      video: '/assets/video/tsplus-ra-html5-full-desktop.mp4',
    },
    {
      title: 'HTML5 – Single Application Launch',
      description: 'The user signs in through the web portal and the application launches automatically in the browser.',
      video: '/assets/video/tsplus-ra-html5-single-app.mp4',
    },
    {
      title: 'HTML5 – Progressive Web App',
      description: 'The user accesses the full desktop through a focused Progressive Web App experience.',
      video: '/assets/video/tsplus-ra-html5-progressive-web-app.mp4',
    },
    {
      title: 'HTML5 – Web Portal',
      description: 'The user signs in through the web portal and opens applications in separate browser tabs.',
      video: '/assets/video/tsplus-ra-html5-web-portal.mp4',
    },
  ] as const;

  readonly scrutinyDlpTourSlides: readonly ProductTourSlide[] = [
    { title: 'Data protection overview', description: 'Monitor protected endpoints, policy activity, blocked transfers and overall risk posture.', image: '/assets/images/scrutiny-dlp-tour-dashboard.svg' },
    { title: 'One policy across every channel', description: 'Control removable media, web and cloud uploads, public GenAI tools, screenshots and screen photography.', image: '/assets/images/scrutiny-dlp-tour-policies.svg' },
    { title: 'Audit-ready incident evidence', description: 'Reconstruct a blocked event with classification details, captured evidence and an immutable activity timeline.', image: '/assets/images/scrutiny-dlp-tour-evidence.svg' },
  ];

  readonly smbCyberTourSlides: readonly ProductTourSlide[] = [
    { title: 'Bandwidth usage and router health', description: 'Review upload and download trends, WAN connectivity and appliance health in one dashboard.', image: '/assets/images/smb-cyber-tour-bandwidth.png' },
    { title: 'Application priority controls', description: 'See bandwidth usage by priority and prioritize business-critical communication apps.', image: '/assets/images/smb-cyber-tour-app-priority.png' },
    { title: 'Network security and device insights', description: 'Monitor blocked threats, DNS activity and connected devices with a network health summary.', image: '/assets/images/smb-cyber-tour-security.png' },
    { title: 'Internet activity and top applications', description: 'Compare activity across profiles and identify the applications driving network traffic.', image: '/assets/images/smb-cyber-tour-activity.png' },
  ];

  readonly cloudBackupTourSlides: readonly ProductTourSlide[] = [
    { title: 'Backup and recovery dashboard', description: 'View protected files, cloud storage and the latest backup status.', image: '/assets/images/cloud-backup-tour-backups.png' },
    { title: 'Active protection settings', description: 'Review protection plans and choose how to respond when suspicious activity is detected.', image: '/assets/images/cloud-backup-tour-protection.png' },
  ];

  readonly cloudDriveTourSlides: readonly ProductTourSlide[] = [
    { title: 'Share files with a link', description: 'Set access permissions, download options and expiry for a shared file.', image: '/assets/images/cloud-drive-tour-sharing.png' },
    { title: 'Cloud Drive dashboard', description: 'Review users, storage usage, files and activity from the administration dashboard.', image: '/assets/images/cloud-drive-tour-dashboard.jpg' },
    { title: 'Compliance dashboard', description: 'View compliance configurations and recent policy events.', image: '/assets/images/cloud-drive-tour-compliance.jpg' },
    { title: 'Secure document viewer', description: 'Open protected documents in the secure viewer.', image: '/assets/images/cloud-drive-tour-secure-viewer.png' },
  ];

  /** Product-owned artwork used when a page does not have a dedicated UI screenshot set. */
  readonly productTourSlides = computed<readonly ProductTourSlide[]>(() => {
    const view = this.view();
    if (!view) return [];
    if (this.isCloudBackup()) return this.cloudBackupTourSlides;
    if (this.isCloudDrive()) return this.cloudDriveTourSlides;
    if (this.slug() === 'smb-cyber-security-appliance') return this.smbCyberTourSlides;
    if (this.isWhatsAppSmb()) return this.whatsAppSmbTourSlides;
    if (view.name === 'Acronis True Image') return this.acronisTrueImageTourSlides;
    if (view.name === 'Microsoft 365 Backup') return this.microsoft365BackupTourSlides;
    if (this.isVmc()) return this.vmcTourSlides;
    if (this.isTsplusServerMonitoring()) return this.tsplusServerMonitoringTourSlides;
    if (this.isTsplusRemoteSupport()) return this.tsplusRemoteSupportTourSlides;
    if (this.isTsplusAdvancedSecurity()) return this.tsplusAdvancedSecurityTourSlides;
    if (this.isTsplusRemoteAccess()) return this.tsplusRemoteAccessTourSlides;
    if (this.isResellerProgram()) return this.resellerProgramTourSlides;
    if (this.isManagedAws()) return this.managedAwsTourSlides;
    if (this.isManagedAzure()) return this.managedAzureTourSlides;
    if (view.name === 'Scrutiny DLP') return this.scrutinyDlpTourSlides;

    const candidates: ProductTourSlide[] = [];
    if (this.isTally()) {
      candidates.push(
        { title: 'Tally cloud remote desktop', description: 'Access TallyPrime Edit Log, Tally.ERP 9 and your files from the TSplus Remote App launcher.', image: '/assets/images/tally-cloud-tour-1.png' },
        { title: 'Tally remote application workspace', description: 'View the remote workspace with shortcuts for your desktop folder, accounting applications and exported files.', image: '/assets/images/tally-cloud-tour-2.png' },
      );
    }
    const add = (title: string, description: string, image: string | null | undefined): void => {
      if (!image || candidates.some((slide) => slide.image === image)) return;
      candidates.push({ title, description, image });
    };

    add(`${view.name} overview`, view.tagline, view.heroImage);
    add(view.featureSpotlight?.title ?? 'Feature spotlight', view.featureSpotlight?.body ?? view.overview, view.featureSpotlight?.image);
    add(view.featureDetail?.title ?? 'Product capabilities', view.featureDetail?.bullets.join(' ') ?? view.overview, view.featureDetail?.image);
    add(view.frameworkSection?.title ?? 'Product framework', view.frameworkSection?.subtitle ?? view.overview, view.frameworkSection?.image);
    add('Framework detail', view.frameworkSection?.subtitle ?? view.overview, view.frameworkSection?.secondaryImage);
    add('Framework overview', view.frameworkSection?.subtitle ?? view.overview, view.frameworkSection?.tertiaryImage);
    add(view.advancedSection?.title ?? 'Advanced capabilities', view.advancedSection?.body ?? view.overview, view.advancedSection?.image);
    add('Advanced feature detail', view.advancedSection?.body ?? view.overview, view.advancedSection?.secondaryImage);
    add('Advanced feature overview', view.advancedSection?.body ?? view.overview, view.advancedSection?.tertiaryImage);

    for (const item of view.benefitGrid) add(item.title, item.body ?? view.overview, item.image);
    for (const item of view.packages) add(item.title, `Explore the ${item.title} package for ${view.name}.`, item.image);

    return candidates.slice(0, 6);
  });

  selectEdrPlan(index: number): void {
    this.selectedEdrPlanIndex.set(index);
  }

  changeEdrQuantity(change: number): void {
    this.edrQuantity.update((quantity) => Math.max(1, quantity + change));
  }

  changeCdrQuantity(change: number): void {
    this.cdrQuantity.update((quantity) => Math.max(1, quantity + change));
  }

  changeCloudDriveQuantity(change: number): void {
    this.cloudDriveQuantity.update((quantity) => Math.max(1, quantity + change));
  }

  cdrPlanTotal(): string {
    return `₹${(9999 * this.cdrQuantity()).toLocaleString('en-IN')}`;
  }

  buyCdrPlan(ev: Event): void {
    ev.preventDefault();
    const quantity = this.cdrQuantity();
    this.cart.add(
      'Cloud Disaster Recovery SMB',
      '₹9,999/server/month',
      quantity,
    );
    this.cart.open();
  }

  openCdrTour(): void {
    this.activeCdrTourSlide.set(0);
    this.overlay.open('screenshotTour');
  }

  closeCdrTour(): void {
    this.overlay.close('screenshotTour');
  }

  selectCdrTourSlide(index: number): void {
    this.activeCdrTourSlide.set(index);
  }

  previousCdrTourSlide(): void {
    this.activeCdrTourSlide.set((this.activeCdrTourSlide() + this.cdrTourSlides.length - 1) % this.cdrTourSlides.length);
  }

  nextCdrTourSlide(): void {
    this.activeCdrTourSlide.set((this.activeCdrTourSlide() + 1) % this.cdrTourSlides.length);
  }

  openGenAiTour(): void {
    this.activeGenAiTourSlide.set(0);
    this.overlay.open('genAiScreenshotTour');
  }

  closeGenAiTour(): void { this.overlay.close('genAiScreenshotTour'); }

  selectGenAiTourSlide(index: number): void { this.activeGenAiTourSlide.set(index); }

  previousGenAiTourSlide(): void {
    this.activeGenAiTourSlide.set((this.activeGenAiTourSlide() + this.genAiTourSlides.length - 1) % this.genAiTourSlides.length);
  }

  nextGenAiTourSlide(): void {
    this.activeGenAiTourSlide.set((this.activeGenAiTourSlide() + 1) % this.genAiTourSlides.length);
  }

  openRmmTour(): void {
    this.activeRmmTourSlide.set(0);
    this.overlay.open('rmmScreenshotTour');
  }

  closeRmmTour(): void { this.overlay.close('rmmScreenshotTour'); }

  selectRmmTourSlide(index: number): void { this.activeRmmTourSlide.set(index); }

  previousRmmTourSlide(): void {
    this.activeRmmTourSlide.set((this.activeRmmTourSlide() + this.rmmTourSlides.length - 1) % this.rmmTourSlides.length);
  }

  nextRmmTourSlide(): void {
    this.activeRmmTourSlide.set((this.activeRmmTourSlide() + 1) % this.rmmTourSlides.length);
  }

  openEdrTour(): void {
    this.activeEdrTourSlide.set(0);
    this.overlay.open('edrScreenshotTour');
  }

  closeEdrTour(): void { this.overlay.close('edrScreenshotTour'); }

  selectEdrTourSlide(index: number): void { this.activeEdrTourSlide.set(index); }

  previousEdrTourSlide(): void {
    this.activeEdrTourSlide.set((this.activeEdrTourSlide() + this.edrTourSlides.length - 1) % this.edrTourSlides.length);
  }

  nextEdrTourSlide(): void {
    this.activeEdrTourSlide.set((this.activeEdrTourSlide() + 1) % this.edrTourSlides.length);
  }

  openProductScreenshotTour(): void {
    if (this.isCloudDisasterRecoverySmb()) return this.openCdrTour();
    if (this.isAcronisGenAi()) return this.openGenAiTour();
    if (this.isRmm()) return this.openRmmTour();
    if (this.isAdvancedEdr()) return this.openEdrTour();

    this.activeProductTourSlide.set(0);
    this.overlay.open('productScreenshotTour');
  }

  closeProductTour(): void { this.overlay.close('productScreenshotTour'); }

  selectProductTourSlide(index: number): void { this.activeProductTourSlide.set(index); }

  previousProductTourSlide(): void {
    const count = this.productTourSlides().length;
    if (count) this.activeProductTourSlide.set((this.activeProductTourSlide() + count - 1) % count);
  }

  nextProductTourSlide(): void {
    const count = this.productTourSlides().length;
    if (count) this.activeProductTourSlide.set((this.activeProductTourSlide() + 1) % count);
  }

  edrPlanTotal(plan: PricingPlan): string {
    return `₹${this.edrPlanTotalValue(plan).toLocaleString('en-IN')}`;
  }

  private edrPlanTotalValue(plan: PricingPlan): number {
    const annualPrice = Number(plan.amount.replace(/[^0-9.]/g, '')) || 0;
    const years = Number.parseInt(plan.term, 10) || 1;
    return annualPrice * years * this.edrQuantity();
  }

  readonly cybirdTerms: readonly { key: CybirdTerm; label: string; saving: string }[] = [
    { key: '1y', label: '1 Year', saving: 'No Savings' },
    { key: '2y', label: '2 Years', saving: 'Save 10%' },
    { key: '3y', label: '3 Years', saving: 'Save 15%' },
    { key: '5y', label: '5 Years', saving: 'Save 20%' },
  ];

  readonly cybirdPlans: readonly CybirdPlan[] = [
    {
      name: 'Essentials', users: 10, support: 999, supportRange: '1 to 10 Employees', accent: 'essentials',
      prices: { '1y': 14999, '2y': 26999, '3y': 37999, '5y': 71999 },
    },
    {
      name: 'Plus', users: 25, support: 1499, supportRange: '10 to 24 Employees', accent: 'plus',
      prices: { '1y': 24999, '2y': 44999, '3y': 63999, '5y': 99999 },
    },
    {
      name: 'Pro', users: 50, support: 1999, supportRange: '24 to 50 Employees', accent: 'pro',
      prices: { '1y': 44999, '2y': 80999, '3y': 114999, '5y': 179999 },
    },
    {
      name: 'Max', users: 100, support: 3999, supportRange: '50 to 100 Employees', accent: 'max',
      prices: { '1y': 94999, '2y': 170999, '3y': 241999, '5y': 379999 },
    },
  ];

  readonly smbIndustries = [
    { name: 'CA Firm', icon: 'account_balance' },
    { name: 'Clinic', icon: 'medical_services' },
    { name: 'Digital Agency', icon: 'campaign' },
    { name: 'Legal Office', icon: 'gavel' },
    { name: 'Retail Store', icon: 'storefront' },
    { name: 'Manufacturing Unit', icon: 'factory' },
    { name: 'School', icon: 'school' },
    { name: 'Hospitality', icon: 'hotel' },
    { name: 'Logistics', icon: 'local_shipping' },
    { name: 'Startup Office', icon: 'rocket_launch' },
  ];

  readonly selectedCybirdTerm = signal<CybirdTerm>('1y');

  readonly activeCybirdTerm = computed(
    () => this.cybirdTerms.find((term) => term.key === this.selectedCybirdTerm()) ?? this.cybirdTerms[0]
  );

  readonly tallyTerms: readonly { key: TallyTerm; label: string; saving: string }[] = [
    { key: 'monthly', label: 'Monthly', saving: '' },
    { key: '3m', label: '3 Months', saving: 'Save 5%' },
    { key: '6m', label: '6 Months', saving: 'Save 7.5%' },
    { key: '1y', label: '1 Year', saving: 'Save 10%' },
  ];

  readonly tallyPlans: readonly TallyPlan[] = [
    { users: '3 to 4', name: 'Tally Private', edition: 'Cloud Lite', prices: { monthly: 1776, '3m': 5061.6, '6m': 9856.8, '1y': 19180.8 }, serverType: 'Dedicated VM', cpu: '4 vCPU', memory: '6 GB', disk: '100 GB' },
    { users: '5', name: 'Tally Private', edition: 'Cloud X Small', prices: { monthly: 2616, '3m': 7455.6, '6m': 14518.8, '1y': 28252.8 }, serverType: 'Dedicated VM', cpu: '4 vCPU', memory: '8 GB', disk: '150 GB' },
    { users: '10', name: 'Tally Private', edition: 'Cloud Small', prices: { monthly: 5520, '3m': 15732, '6m': 30636, '1y': 59616 }, serverType: 'Dedicated VM', cpu: '6 vCPU', memory: '12 GB', disk: '150 GB' },
    { users: '11 to 15', name: 'Tally Private', edition: 'Cloud Medium', prices: { monthly: 7200, '3m': 20520, '6m': 39960, '1y': 77760 }, serverType: 'Dedicated VM', cpu: '8 vCPU', memory: '16 GB', disk: '200 GB' },
    { users: '16 to 20', name: 'Tally Private', edition: 'Cloud X Large', prices: { monthly: 11664, '3m': 33242.4, '6m': 64735.2, '1y': 125971.2 }, serverType: 'Dedicated VM', cpu: '12 vCPU', memory: '32 GB', disk: '300 GB' },
    { users: '21+ to 30', name: 'Tally Private', edition: 'Cloud XX Large', prices: { monthly: 21168, '3m': 60328.8, '6m': 117482.4, '1y': 228614.4 }, serverType: 'Dedicated VM', cpu: '16 vCPU', memory: '64 GB', disk: '400 GB' },
    { users: '31+ to 50', name: 'Tally Private', edition: 'Cloud XXX Large', prices: { monthly: 26640, '3m': 75924, '6m': 147852, '1y': 287712 }, serverType: 'Dedicated VM', cpu: '20 vCPU', memory: '96 GB', disk: '500 GB' },
    { users: '51+ to 75', name: 'Tally Private', edition: 'Cloud XXX Large', prices: { monthly: 48912, '3m': 139399.2, '6m': 271461.6, '1y': 528249.6 }, serverType: 'Dedicated VM', cpu: '24 vCPU', memory: '128 GB', disk: '750 GB' },
  ];

  readonly smbDesktopPlans: readonly TallyPlan[] = [
    { users: '1 to 5', name: 'SMB Cloud Desktop', edition: 'Starter', prices: { monthly: 4995, '3m': 14985, '6m': 29970, '1y': 59940 }, serverType: 'Shared VM', cpu: '4 vCPU', memory: '8 GB', disk: '100 GB' },
    { users: '6 to 10', name: 'SMB Cloud Desktop', edition: 'Business', prices: { monthly: 9990, '3m': 29970, '6m': 59940, '1y': 119880 }, serverType: 'Dedicated VM', cpu: '6 vCPU', memory: '16 GB', disk: '200 GB' },
    { users: '11 to 20', name: 'SMB Cloud Desktop', edition: 'Professional', prices: { monthly: 19980, '3m': 59940, '6m': 119880, '1y': 239760 }, serverType: 'Dedicated VM', cpu: '8 vCPU', memory: '32 GB', disk: '300 GB' },
    { users: '21 to 50', name: 'SMB Cloud Desktop', edition: 'Enterprise', prices: { monthly: 49950, '3m': 149850, '6m': 299700, '1y': 599400 }, serverType: 'Dedicated VM', cpu: '12 vCPU', memory: '64 GB', disk: '500 GB' },
  ];

  readonly selectedTallyTerm = signal<TallyTerm>('monthly');

  readonly activeTallyTerm = computed(
    () => this.tallyTerms.find((term) => term.key === this.selectedTallyTerm()) ?? this.tallyTerms[0]
  );

  tallyPrice(plan: TallyPlan): number {
    return plan.prices[this.selectedTallyTerm()];
  }

  readonly cloudDriveTerms: readonly { key: CloudDriveTerm; label: string; saving: string }[] = [
    { key: 'monthly', label: 'Monthly', saving: 'No Savings' },
    { key: '3m', label: '3 Months', saving: 'Save 5%' },
    { key: '6m', label: '6 Months', saving: 'Save 7.5%' },
    { key: '1y', label: '1 Year', saving: 'Save 10%' },
  ];

  readonly cloudDrivePlans: readonly CloudDrivePlan[] = [
    {
      storage: '250 GB',
      unit: 'per customer',
      qty: 1,
      prices: { monthly: 2499, '3m': 7122.15, '6m': 13869.45, '1y': 26989.2 },
      comments: 'Enterprise File & Sync with 250 GB Storage | Unlimited Users',
    },
    {
      storage: '500 GB',
      unit: 'per customer',
      qty: 1,
      prices: { monthly: 4999, '3m': 14247.15, '6m': 27744.45, '1y': 53989.2 },
      comments: 'Enterprise File & Sync with 500 GB Storage | Unlimited Users',
    },
    {
      storage: '1 TB',
      unit: 'per customer',
      qty: 1,
      prices: { monthly: 9999, '3m': 28497.15, '6m': 55494.45, '1y': 107989.2 },
      comments: 'Enterprise File & Sync with 1 TB Storage | Unlimited Users',
    },
    {
      storage: '2 TB',
      unit: 'per customer',
      qty: 1,
      prices: { monthly: 19000, '3m': 54150, '6m': 105450, '1y': 205200 },
      comments: 'Enterprise File & Sync with 2 TB Storage | Unlimited Users',
    },
    {
      storage: '5 TB',
      unit: 'per customer',
      qty: 1,
      prices: { monthly: 35625, '3m': 101531.25, '6m': 197718.75, '1y': 384750 },
      comments: 'Enterprise File & Sync with 5 TB Storage | Unlimited Users',
    },
  ];

  readonly selectedCloudDriveTerm = signal<CloudDriveTerm>('1y');

  readonly activeCloudDriveTerm = computed(
    () => this.cloudDriveTerms.find((term) => term.key === this.selectedCloudDriveTerm()) ?? this.cloudDriveTerms[0]
  );

  cloudDrivePrice(plan: CloudDrivePlan): number {
    return plan.prices[this.selectedCloudDriveTerm()];
  }

  cloudDriveTotal(plan: CloudDrivePlan): number {
    return Math.round(this.cloudDrivePrice(plan) * this.cloudDriveQuantity());
  }

  /** Names that have a page of their own but are missing from the directory. */
  private static readonly EXTRA_NAMES: readonly string[] = [
    ...new Set([...Object.keys(DEEP_CONTENT), ...Object.keys(RICH_PRODUCTS)]),
  ];

  readonly slug = toSignal(this.route.paramMap.pipe(
    map((p) => p.get('slug') ?? this.route.snapshot.data['productSlug'] ?? ''),
  ), {
    initialValue: '',
  });

  readonly isMicrosoftEnterprisePage = computed(() =>
    this.slug() === 'microsoft-365-enterprise' ||
    this.slug() === 'microsoft-365-enterprise-office365' ||
    this.slug() === 'microsoft-365-enterprise-frontline' ||
    this.slug() === 'microsoft-365-enterprise-nonprofit' ||
    this.slug() === 'microsoft-365-enterprise-additional',
  );

  /** `null` while the slug matches nothing — the effect below sends those home. */
  readonly view = computed<ProductView | null>(() => {
    const slug = this.slug();
    const view = this.resolve(slug);
    if (!view) return null;
    if (view && this.slug() === 'acronis-mdr') {
      return { ...view, heroPoints: ['24/7 SOC monitoring', 'Proactive threat hunting', 'Expert incident response', 'Integrated recovery'] };
    }
    if (view && this.slug() === 'microsoft-copilot-training') {
      return {
        ...view,
        why: COPILOT_TRAINING_SAMPLE_WHY,
        faqs: COPILOT_TRAINING_SAMPLE_FAQS,
        heroPoints: ['Hands-on Copilot training', 'Effective prompting', 'Everyday Microsoft 365 workflows', 'Responsible AI practices'],
      };
    }
    if (view && this.slug() === 'microsoft-365-training') {
      return {
        ...view,
        heroPoints: ['Role-based training', 'Hands-on learning', 'Certification preparation', 'Microsoft 365 Copilot'],
        why: MICROSOFT_TRAINING_SAMPLE_WHY,
        faqs: MICROSOFT_TRAINING_SAMPLE_FAQS,
      };
    }
    if (slug === 'acronis-backup-advanced') {
      return { ...view, heroImage: '/assets/images/acronis-backup-advanced-hero.svg' };
    }
    if (slug === 'acronis-ot') {
      return { ...view, heroImage: '/assets/images/acronis-cyber-protect-ot-hero.svg' };
    }
    if (slug === 'rtx-pro-6000') {
      return {
        ...view,
        brandSuffix: 'GPU',
        crumb: 'Home › Cloud › GPU Cloud',
        tagline: 'RTX PRO 6000 Blackwell, on demand from Indian data centres',
        heroHighlight: 'Your models and scenes grew — make your GPU grow with them.',
        heroMessages: [
          '96 GB GDDR7 for LLMs and 3D',
          'FP4 inference at lower cost per token',
          'Hosted in India · billed in INR',
        ],
        heroPoints: [
          '96 GB GDDR7 ECC',
          'FP4 Tensor Cores',
          'MIG partitioning',
          'Confidential computing',
          'INR billing + GST invoice',
          '24×7 GPU specialists',
        ],
        overview: 'One card that trains, serves and renders. 96 GB of GDDR7 memory and fifth-generation Tensor Cores let you run mid-size LLMs, generative video and heavy 3D scenes on the same instance — billed in rupees, invoiced with GST. Free setup and migration make the move simple, and hourly billing lets you prove a workload before you commit to a term.',
      };
    }
    if (slug === 'nvidia-rtx-6000-ada') {
      return {
        ...view,
        brandSuffix: 'GPU',
        crumb: 'Home › Cloud › GPU Cloud',
        tagline: 'RTX 6000 Ada cloud workstations for 3D, CAD and AI',
        heroHighlight: 'Your designers need power, not another workstation purchase.',
        heroMessages: [
          'Cloud workstations for CAD and BIM',
          'Real-time ray tracing from any laptop',
          'Hosted in India · billed in INR',
        ],
        heroPoints: [
          '48 GB GDDR6 ECC',
          'Real-time ray tracing',
          'Virtual workstation ready',
          'Launch in minutes',
          'INR billing + GST invoice',
          '24×7 GPU specialists',
        ],
        overview: 'Give every designer and engineer a 48 GB professional GPU without buying a single workstation. Open large assemblies, preview ray-traced scenes in real time and run GenAI models from any laptop — hosted in India, billed monthly in rupees. Keep project files in the data centre, give every designer the same golden image, and onboard a new hire in minutes instead of weeks.',
      };
    }
    if (slug === 'rtx-a6000') {
      return {
        ...view,
        brandSuffix: 'GPU',
        crumb: 'Home › Cloud › GPU Cloud',
        tagline: "RTX A6000 cloud GPUs for 3D and AI that won't fit on a laptop",
        heroHighlight: 'Proven Ampere power for rendering, simulation and AI.',
        heroMessages: [
          '48 GB ECC, 96 GB with NVLink',
          'Render, simulate and train on one GPU',
          'Hosted in India · billed in INR',
        ],
        heroPoints: [
          '48 GB GDDR6 ECC',
          'NVLink — 96 GB pooled',
          'BF16 & TF32 for AI',
          'Virtual workstation ready',
          'INR billing + GST invoice',
          '24×7 GPU specialists',
        ],
        overview: 'The dependable 48 GB Ampere workhorse. Render complex scenes, run simulations and train mid-size deep-learning models — and bridge two cards over NVLink when a job needs 96 GB. Hosted in India, billed monthly in rupees. Pick one card for workstations, or NVLink pairs when a scene or dataset needs 96 GB — all with free setup and 24×7 support.',
      };
    }
    if (slug === 'rtx-8000') {
      return {
        ...view,
        brandSuffix: 'GPU',
        crumb: 'Home › Cloud › GPU Cloud',
        tagline: 'RTX 8000 cloud GPUs for bigger renders on a smaller budget',
        heroHighlight: 'Big scenes, small budget — rendering without the render farm.',
        heroMessages: [
          '48 GB rendering at the lowest price',
          'NVLink pools 96 GB for huge scenes',
          'RTX 8000 cloud GPUs live in India',
        ],
        heroPoints: [
          '48 GB GDDR6 ECC',
          'NVLink — 96 GB pooled',
          'Real-time ray tracing',
          'Lowest entry price',
          'INR billing + GST invoice',
          '24×7 GPU specialists',
        ],
      };
    }
    if (slug === 'email-archiving' || slug === 'e-mail-archiving') {

      return {
        ...view,
        why: EMAIL_ARCHIVING_SAMPLE_WHY,
        faqs: EMAIL_ARCHIVING_SAMPLE_FAQS,
        heroPoints: ['Real-time journaling', 'Immutable storage', 'Fast eDiscovery', 'Custom retention policies'],
      };
    }
    if (slug !== 'agentic-ai') return view;
    return {
      ...view,
      heroImage: '/assets/images/agentic-ai/hero.svg',
      why: AGENTIC_AI_SAMPLE_WHY,
      faqs: AGENTIC_AI_SAMPLE_FAQS,
      heroBrand: { ...view.heroBrand, logoImage: '/assets/images/agentic-ai/logo.png' },
      videos: ['ScMzIvxBSi4', 'ScMzIvxBSi4'],
      videoLabels: ['Introduction', 'Use Case'],
    };
  });

  /** Current portion of an optional rotating product hero message. */
  readonly typedHeroText = signal('');

  /** The animated hero SVG, injected verbatim because it is our own data file. */
  /** The dotted world map behind the hero. Static markup from our own data file. */
  readonly worldMap: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(WORLD_MAP_HTML);

  readonly sceneHtml = computed<SafeHtml>(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.view()?.heroScene ?? '')
  );

  /** Every resolved product gets a localized or category-level hero illustration. */
  readonly isFlagship = computed(() => !!this.view()?.heroImage);

  readonly showAiPoweredBadge = computed(() => {
    const name = this.view()?.name.trim() ?? '';
    return [
      'MDR', 'Managed XDR', 'Advanced Endpoint Security (EDR)',
      'Advanced Email Security', 'Cloud Security Posture Mgmt',
      'Security Awareness Training', 'Cloud DLP', 'Scrutiny DLP',
      'Cyber Frames', 'Cloud Backup', 'Microsoft 365 Backup',
      'E-Mail Backup / Archiving', 'Cloud Disaster Recovery',
      'Cloud Object Storage', 'Cloud Drive', 'Acronis GenAI',
      'Remote Monitoring & Mgmt (RMM)',
    ].includes(name);
  });


  /** The EDR campaign places its commercial offer immediately after the videos. */
  readonly isAdvancedEdr = computed(
    () => this.view()?.name === 'Advanced Endpoint Security (EDR)'
  );

  readonly isScrutinyEdr = computed(() => this.view()?.name === 'Scrutiny EDR');

  readonly isCloudObjectStorage = computed(() => this.view()?.name === 'Cloud Object Storage');

  readonly isMicrosoftEntraId = computed(() => this.view()?.name === 'Microsoft Entra ID');

  readonly isEntraIdBackup = computed(() => this.view()?.name === 'Entra ID Backup');

  readonly isDigiCert = computed(() => this.view()?.name === 'DigiCert');

  readonly isAutonomousThreatManagement = computed(
    () => this.view()?.name === 'Autonomous Threat Management'
  );

  readonly isAutonomousThreatSolution = computed(
    () => Object.prototype.hasOwnProperty.call(ATM_SOLUTION_DETAILS, this.slug())
  );

  readonly isOurPlatform = computed(() => this.slug() === 'our-platform');

  readonly isWatchtower = computed(() => this.slug() === 'watchtower');

  readonly ourPlatformFaqs: [string, string][] = [
    ['What can I manage from the XcellHost Cloud Platform?', 'You can manage compute, storage, networking, databases, security controls and managed services from one console.'],
    ['Can the platform scale as our requirements grow?', 'Yes. Resources can be expanded as workloads, users and traffic increase.'],
    ['Where is the platform hosted?', 'Platform services are available from Indian data centres with options selected according to workload and residency requirements.'],
    ['Can XcellHost manage the environment for us?', 'Yes. You can use the platform as self-service infrastructure or engage XcellHost for deployment, monitoring and ongoing management.'],
    ['Does the platform support migration from another provider?', 'Yes. The team can assess existing workloads and plan a phased migration with validation and rollback considerations.'],
    ['How do we request a platform demonstration?', 'Use the callback or Let’s Talk option and the team will arrange a guided demonstration for your use case.'],
  ];

  readonly watchtowerFaqs: [string, string][] = [
    ['What does Trust Watch monitor?', 'Trust Watch brings signals from connected cloud, security, infrastructure and business tools into one operational view.'],
    ['Can Trust Watch connect to our existing tools?', 'Yes. Connectors can ingest events from supported products while custom integration requirements can be reviewed during onboarding.'],
    ['How are alerts prioritised?', 'Incoming events are normalised and grouped by severity, source and operational context to help teams focus on the most important items.'],
    ['Can different teams receive different notifications?', 'Yes. Routing can be aligned to teams, clients, services and escalation requirements.'],
    ['Does Trust Watch replace our current monitoring products?', 'It can complement existing products by providing one consolidated intelligence and action layer across them.'],
    ['How can we see a Trust Watch demonstration?', 'Use the callback or Let’s Talk option and the team will arrange a guided demonstration using representative workflows.'],
  ];

  readonly nvidiaA100Faqs: Faq[] = [
    ['What workloads is NVIDIA A100 80GB suited to?', 'A100 80GB is suited to large-model training, fine-tuning, GPU inference and other CUDA-based compute jobs. Share your model and dataset requirements so the GPU and memory can be sized correctly.'],
    ['Do we need a GPU specialist to get started?', 'XcellHost can help select the configuration and prepare a CUDA-ready environment. Your team remains responsible for its application code and model workflow unless you arrange additional managed help.'],
    ['Can more than one workload use the same A100?', 'Yes. Multi-Instance GPU (MIG) can partition a compatible A100 into isolated instances. The number and size of instances depend on the chosen configuration and each workload’s requirements.'],
    ['Where will our A100 workload run?', 'The A100 service is offered from Indian data centres. Confirm the selected location, network controls and any data residency needs with the team before deployment.'],
    ['Can we test a workload before committing?', 'Ask the GPU team about a scoped proof of concept or trial. Availability, duration and configuration are confirmed when the request is reviewed.'],
    ['How is NVIDIA A100 priced?', 'Available configurations can be billed hourly or monthly in INR. The final quote depends on GPU count, storage, networking, support and the selected term.'],
  ];

  readonly isSmbCyber = computed(
    () => this.view()?.name === 'SMB Cyber Security Appliance'
  );

  readonly isCloudDisasterRecoverySmb = computed(
    () => this.view()?.name === 'Cloud Disaster Recovery SMB'
  );

  /** Both catalogue routes use the CyberFit disaster-recovery pricing section. */
  readonly isCloudDisasterRecovery = computed(() => {
    const name = this.view()?.name;
    return name === 'Cloud Disaster Recovery' || name === 'Cloud Disaster Recovery SMB';
  });

  readonly isAcronisGenAi = computed(() => this.view()?.name === 'Acronis GenAI');

  readonly isTally = computed(() => this.view()?.name === 'Tally on Cloud');

  readonly isSmbCloudDesktop = computed(() => this.view()?.name === 'SMB Cloud Desktop');

  readonly isAcronisTrueImage = computed(() => this.view()?.name === 'Acronis True Image');

  readonly isSiteLock = computed(() => this.view()?.name === 'Web Security (SiteLock)');

  readonly isManagedMicrosoft365 = computed(() => this.view()?.name === 'Managed Microsoft 365');
  readonly isMicrosoftCopilot = computed(() => this.slug() === 'microsoft-copilot');
  readonly isCopilotStudio = computed(() => this.slug() === 'microsoft-copilot-studio');
  readonly isZohoWorkspace = computed(() => this.slug() === 'zoho-workspace');

  readonly zohoWorkspaceFaqs: Faq[] = [
    ['What is included with Zoho Workspace?', 'Zoho Workspace combines professional business email with Mail, Cliq, Meeting, WorkDrive, Connect and Calendar in one managed subscription.'],
    ['Can XcellHost migrate our existing business email?', 'Yes. We migrate mailboxes from Microsoft 365, Google Workspace, cPanel, Rediffmail and other supported platforms with a planned approach designed to minimise downtime.'],
    ['Will XcellHost configure our domain and DNS records?', 'Yes. Our team handles domain verification and configures MX, SPF, DKIM and DMARC records for secure mail delivery.'],
    ['Which Zoho Workspace plan should we choose?', 'Mail Lite suits straightforward business email, Mail Premium adds retention and compliance features, while Workplace Standard and Professional include the broader collaboration suite.'],
    ['Can we use Zoho Workspace with Outlook and mobile devices?', 'Yes. Supported plans provide web and mobile access, with IMAP, POP3 or ActiveSync availability depending on the selected plan.'],
    ['Do you provide security and compliance features?', 'Yes. Available capabilities include S/MIME, two-factor authentication, TLS, spam and phishing protection, eDiscovery, legal hold, retention policies and audit logs.'],
    ['How is Zoho Workspace billed?', 'Plans are billed in INR on an annual basis, excluding 18% GST. XcellHost provides a GST-compliant invoice and can confirm volume or multi-year pricing.'],
    ['What support is included?', 'XcellHost provides migration assistance, technical setup and 24×7 support through phone, WhatsApp and tickets.'],
  ];

  readonly isVmc = computed(() => this.view()?.name === 'Verified Mark Certificates (VMC)');

  readonly isCmc = computed(() => this.view()?.name === 'DigiCert Common Mark Certificate (CMC)');

  readonly isTsplusServerMonitoring = computed(() => this.view()?.name === 'TSplus Server Monitoring');

  readonly isTsplusRemoteSupport = computed(() => this.view()?.name === 'TSplus Remote Support');

  readonly isTsplusAdvancedSecurity = computed(() => this.view()?.name === 'TSplus Advanced Security');

  readonly isTsplusRemoteAccess = computed(() => this.view()?.name === 'TSplus Remote Access');
  readonly isResellerProgram = computed(() => this.view()?.name === 'Reseller Program');

  readonly isManagedAws = computed(() => this.view()?.name === 'Managed AWS');
  readonly isManagedAzure = computed(() => {
    const name = this.view()?.name;
    return name === 'Managed Azure' || name === 'Managed Azure Services';
  });

  readonly isCloudDrive = computed(() => this.view()?.name === 'Cloud Drive');

  readonly isCloudBackup = computed(() => this.view()?.name.toLowerCase().startsWith('cloud backup') ?? false);

  readonly isInfrastructure = computed(() => this.view()?.name === 'Infrastructure');

  readonly isWhatsAppSmb = computed(() => this.view()?.name === 'WhatsApp SMB');

  /** Every product's available videos, shown together immediately before reviews. */
  readonly showcaseVideos = computed<readonly { label: string; url: SafeResourceUrl }[]>(() => {
    const view = this.view();
    if (!view) return [];

    const useBackupVideos =
      this.slug() === 'rtx-pro-6000' ||
      this.slug() === 'rtx-8000' ||
      this.slug() === 'nvidia-rtx-6000-ada' ||
      this.slug() === 'rtx-a6000';
    const videos = this.isMicrosoftEnterprisePage()
      ? PRODUCT_VIDEOS['Microsoft 365']
      : useBackupVideos
        ? PRODUCT_VIDEOS['Cloud Backup (Acronis)']
        : view.videos;

    return videos.slice(0, 2).flatMap((video, index) => {
      if (!video) return [];
      return [{
        label: this.isMicrosoftEnterprisePage()
          ? 'Microsoft 365 overview'
          : useBackupVideos
            ? (index === 0 ? 'Product Intro' : 'Use Cases')
            : (view.videoLabels[index] ?? (index === 0 ? 'Product Intro' : 'Use Cases')),
        url: this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube-nocookie.com/embed/${video}?rel=0&playsinline=1`,
        ),
      }];
    });
  });

  readonly isRmm = computed(
    () => this.view()?.name === 'Remote Monitoring & Mgmt (RMM)'
  );

  /** Long hero headings use the compact single-line treatment as one whole title. */
  readonly compactHeroTitle = computed(() => {
    const v = this.view();
    if (!v) return false;
    const title = `Xcell${v.brandSuffix} | ${v.name}`;
    return title.length > 34 || title.trim().split(/\s+/).filter(Boolean).length > 5;
  });

  readonly platforms = computed(() =>
    (this.view()?.platforms ?? []).map((name) => ({ name, icon: PLATFORM_ICONS[name] ?? '🔹' }))
  );

  readonly compareRows = computed<CompareRow[]>(() =>
    (this.view()?.edr?.compare.rows ?? []).map((r) => ({ head: r[0], cells: r.slice(1) }))
  );

  readonly waHref = computed(() =>
    this.leads.whatsappLink(`Hi XcellHost, I would like to know more about ${this.view()?.name ?? 'your services'}.`)
  );

  readonly mailHref = computed(() => {
    const name = this.view()?.name ?? 'your services';
    return this.leads.mailtoLink(
      `Enquiry: ${name}`,
      [
        `Hi XcellHost,`,
        ``,
        `We are looking at ${name}.`,
        ``,
        `Company:`,
        `Number of users / scale:`,
        `What we are trying to solve:`,
        `Best time to call:`,
      ].join('\n')
    );
  });

  readonly askAiPrompt = computed(() => {
    const view = this.view();
    const productName = view?.name ?? 'this service';
    const tagline = view?.tagline ?? '';
    const overview = view?.overview ?? '';

    return [
      `Give me a quick overview of XcellHost's ${productName} service.`,
      tagline ? `Tagline: ${tagline}` : '',
      overview ? `Context: ${overview}` : '',
      'Summarize the ideal use cases, benefits, and what a business buyer should ask before purchasing.',
    ]
      .filter(Boolean)
      .join(' ');
  });

  askAiHref(platform: 'chatgpt' | 'perplexity' | 'claude' | 'google' | 'grok'): string {
    const prompt = encodeURIComponent(this.askAiPrompt());

    switch (platform) {
      case 'chatgpt':
        return `https://chatgpt.com/?q=${prompt}`;
      case 'perplexity':
        return `https://www.perplexity.ai/search/new?q=${prompt}`;
      case 'claude':
        return `https://claude.ai/new?q=${prompt}`;
      case 'google':
        return `https://gemini.google.com/app`;
      case 'grok':
        return `https://grok.com/?q=${prompt}`;
    }
  }

  constructor() {
    effect(() => {
      this.selectedTallyTerm.set(this.isSmbCloudDesktop() ? '1y' : 'monthly');
    });

    effect(() => {
      const v = this.view();
      if (!v) {
        void this.router.navigate(['/']);
        return;
      }
      const slug = this.slug();
      this.seo.set(`${v.name} — XcellHost`, v.overview.slice(0, 160), `/${slug}/`);
      this.seo.setJsonLd('product', this.jsonLd(v, slug));
    });

    effect((onCleanup) => {
      const messages = this.view()?.heroMessages ?? [];
      this.typedHeroText.set('');
      if (!messages.length) return;

      let messageIndex = 0;
      let characterIndex = 0;
      let deleting = false;
      let timer: ReturnType<typeof setTimeout>;

      const typeNextCharacter = () => {
        const message = messages[messageIndex];
        characterIndex += deleting ? -1 : 1;
        this.typedHeroText.set(message.slice(0, characterIndex));

        let delay = deleting ? 35 : 70;
        if (!deleting && characterIndex === message.length) {
          deleting = true;
          delay = 1600;
        } else if (deleting && characterIndex === 0) {
          deleting = false;
          messageIndex = (messageIndex + 1) % messages.length;
          delay = 350;
        }
        timer = setTimeout(typeNextCharacter, delay);
      };

      timer = setTimeout(typeNextCharacter, 300);
      onCleanup(() => clearTimeout(timer));
    });
  }

  /* -------------------------------------------------------------- routing */

  /**
   * 1. the directory, 2. the hand-written product content (so `Acronis EDR`,
   * which never appears in the directory, still resolves), 3. give up.
   */
  private resolve(slug: string): ProductView | null {
    if (!slug) return null;
    const enterpriseVariants: Record<string, string> = {
      'microsoft-365-enterprise-office365': 'Office 365 Enterprise',
      'microsoft-365-enterprise-frontline': 'Microsoft 365 Frontline',
      'microsoft-365-enterprise-nonprofit': 'Microsoft 365 Enterprise Nonprofit',
      'microsoft-365-enterprise-additional': 'Microsoft 365 Enterprise Additional Services',
    };
    if (enterpriseVariants[slug]) {
      return this.products.build({
        name: enterpriseVariants[slug],
        cat: 'Cloud',
        crumb: 'Cloud › Microsoft 365',
      });
    }
    if (slug === 'microsoft-365-enterprise') {
      return this.products.build({
        name: 'Microsoft 365 Enterprise',
        cat: 'Cloud',
        crumb: 'Cloud › Microsoft 365',
      });
    }
    if (slug === 'server-management') {
      return this.products.build({
        name: 'Server Management',
        cat: 'Cloud',
        crumb: 'Cloud › Managed Services',
      });
    }
    if (slug === 'cloud-devops-services') {
      return this.products.build({
        name: 'Cloud DevOps Services',
        cat: 'Cloud',
        crumb: 'Cloud › Managed DevOps',
      });
    }
    if (slug === 'register-a-domain-name') {
      const view = this.products.build({
        name: 'Register a Domain Name',
        tag: 'Find the right domain for your next big idea.',
        cat: 'Web Presence',
        crumb: 'Web Presence › Domains',
      });
      return {
        ...view,
        heroImage: '/assets/images/domains/hero.svg',
        heroBrand: { ...view.heroBrand, logoImage: '/assets/images/domains/logo.png' },
        videos: ['ScMzIvxBSi4', 'ScMzIvxBSi4'],
        videoLabels: ['Introduction', 'Use Case'],
      };
    }
    if (slug === 'iot-cloud') {
      const view = this.products.build({
        name: 'IoT Cloud',
        tag: 'Connect every device. Process at the edge.',
        cat: 'Cloud',
        crumb: 'Cloud › IoT Cloud',
      });
      return {
        ...view,
        heroImage: '/assets/images/iot-infrastructure/hero.svg',
        // Placeholder clips, matching the demo video used on other product pages.
        videos: ['ScMzIvxBSi4', 'ScMzIvxBSi4'],
        videoLabels: ['Introduction', 'Use Case'],
        heroBrand: { ...view.heroBrand, logoImage: '/assets/images/iot-infrastructure/logo.png' },
      };
    }

    if (slug === 'infrastructure') {
      return this.products.build({
        name: 'Infrastructure',
        tag: 'Reliable cloud infrastructure for business-critical workloads.',
        cat: 'Cloud',
        crumb: 'Cloud › Infrastructure',
      });
    }

    if (slug === 'digicert-cmc') {
      return this.products.build({
        name: 'DigiCert Common Mark Certificate (CMC)',
        tag: 'Display your established brand logo in supported inboxes without a registered trademark.',
        cat: 'Digital Trust',
        crumb: 'Digital Trust › Mark Certificates',
      });
    }

    if (slug === 'digicert' || slug === 'digicert-ssl-certificates') {
      return this.products.build({
        name: 'DigiCert',
        tag: 'SSL made simple. PKI done right.',
        cat: 'Digital Trust',
        crumb: 'Digital Trust › SSL by Brand',
      });
    }

    if (slug === 'our-platform') {
      return this.products.build({
        name: 'Attack Surface Management',
        tag: 'Continuous external asset discovery and vulnerability monitoring',
        cat: 'Security',
        crumb: 'Security › Autonomous Threat Management',
      });
    }

    if (slug === 'watchtower') {
      return this.products.build({
        name: 'Attack Surface Management',
        tag: 'Continuous external asset discovery and vulnerability monitoring',
        cat: 'Security',
        crumb: 'Security › Autonomous Threat Management',
      });
    }

    const entry = this.catalog.entryBySlug(slug);
    if (entry) {
      return this.products.build({
        name: entry.name,
        tag: entry.desc,
        cat: entry.cat,
        crumb: `${entry.cat} › ${entry.group}`,
      });
    }

    const name = ProductPage.EXTRA_NAMES.find((k) => slugify(k) === slug);
    return name ? this.products.build({ name }) : null;
  }

  /* ------------------------------------------------------------ cart / CTA */

  /** `.pl-add` — drop the plan in the quote cart and stay put. */
  readonly planQuantities = signal<Record<string, number>>({});

  planQuantity(plan: PricingPlan): number {
    return this.planQuantities()[plan.cartName] ?? 1;
  }

  changePlanQuantity(plan: PricingPlan, change: number): void {
    this.planQuantities.update(quantities => ({
      ...quantities,
      [plan.cartName]: Math.max(1, Math.min(99, (quantities[plan.cartName] ?? 1) + change)),
    }));
  }

  private addPlanQuantity(plan: PricingPlan): void {
    this.cart.add(plan.cartName, plan.cartPrice, this.planQuantity(plan));
  }

  addPlan(plan: PricingPlan, ev: Event): void {
    ev.preventDefault();
    this.addPlanQuantity(plan);
  }

  /** RMM "View Plan" keeps the visitor on-page and opens the selected plan in the cart. */
  viewRmmPlan(plan: PricingPlan, ev: Event): void {
    ev.preventDefault();
    const quantity = this.edrQuantity();
    this.cart.add(plan.cartName, plan.cartPrice, quantity);
    this.cart.open();
  }

  /** `.pl-buy` and the hero Buy Now — add, open the drawer, go straight to checkout. */
  buyPlan(plan: PricingPlan, ev: Event): void {
    ev.preventDefault();
    this.addPlanQuantity(plan);
    this.cart.open();
    this.cart.toCheckout();
  }

  buyEdrPlan(plan: PricingPlan, ev: Event): void {
    ev.preventDefault();
    const quantity = this.edrQuantity();
    this.cart.add(plan.cartName, plan.cartPrice, quantity);
    this.cart.open();
    this.cart.toCheckout();
  }

  /** Hero "Buy Now" buys the entry-level term, which is what the ladder starts at. */
  buyNow(ev: Event): void {
    const plan = this.view()?.plans[0];
    if (!plan) {
      ev.preventDefault();
      return;
    }
    this.buyPlan(plan, ev);
  }

  requestDoc(kind: DocKind, ev: Event): void {
    ev.preventDefault();
    const v = this.view();
    if (!v) return;
    this.docs.ask(kind, v.name);
    this.overlay.open('doc');
  }

  openTrial(ev: Event): void {
    ev.preventDefault();
    this.overlay.open('trial');
  }

  openCallback(ev: Event, request?: string): void {
    ev.preventDefault();
    const name = this.view()?.name ?? "";
    this.topics.ask(request ? `${name} - ${request}` : name);
    this.overlay.open('callback');
  }

  onH100HeroAction(action: H100HeroAction): void {
    const event = new Event('click');
    switch (action) {
      case 'infosheet':
      case 'presentation':
        this.requestDoc(action, event);
        break;
      case 'tour':
        this.openProductScreenshotTour();
        break;
      case 'trial':
        this.openTrial(event);
        break;
      case 'lead':
        this.openCallback(event, 'H100 consultation');
        break;
    }
  }

  selectH100Plan(selection: H100PlanSelection): void {
    this.cart.add(`NVIDIA H100 ${selection.code} — ${selection.term}`, `${selection.price}/mo + GST`, 1);
    this.cart.open();
  }

  requestRtxPlan(request: string): void {
    this.topics.ask(`RTX 8000 - ${request}`);
    this.overlay.open('callback');
  }

  requestRtxProPlan(request: string): void {
    this.topics.ask(`RTX PRO 6000 - ${request}`);
    this.overlay.open('callback');
  }

  requestRtx6000AdaPlan(request: string): void {
    this.topics.ask(`RTX 6000 Ada - ${request}`);
    this.overlay.open('callback');
  }

  requestRtxA6000Plan(request: string): void {
    this.topics.ask(`RTX A6000 - ${request}`);
    this.overlay.open('callback');
  }

  selectCybirdTerm(term: CybirdTerm): void {
    this.selectedCybirdTerm.set(term);
  }

  cybirdPrice(plan: CybirdPlan): number {
    return plan.prices[this.selectedCybirdTerm()];
  }

  readonly cybirdHardwarePrice = 16999;

  cybirdTotal(plan: CybirdPlan): number {
    return this.cybirdHardwarePrice + this.cybirdPrice(plan);
  }

  formatInr(value: number): string {
    return new Intl.NumberFormat('en-IN').format(Math.round(value));
  }

  selectCybirdPlan(plan: CybirdPlan, ev: Event): void {
    ev.preventDefault();
    this.topics.ask(`Cybird ${plan.name} - ${this.activeCybirdTerm().label}`);
    this.overlay.open('callback');
  }

  selectTallyTerm(term: TallyTerm): void {
    this.selectedTallyTerm.set(term);
  }

  selectTallyPlan(plan: TallyPlan, ev: Event): void {
    ev.preventDefault();
    this.topics.ask(`${plan.name} (${plan.edition}) - ${plan.users} users - ${this.activeTallyTerm().label}`);
    this.overlay.open('callback');
  }

  selectSmbDesktopPlan(plan: TallyPlan, ev: Event): void {
    ev.preventDefault();
    this.topics.ask(`${plan.name} (${plan.edition}) - ${plan.users} users - ${this.activeTallyTerm().label}`);
    this.overlay.open('callback');
  }

  smbDesktopPrice(plan: TallyPlan): number {
    return plan.prices[this.selectedTallyTerm()];
  }

  selectCloudDriveTerm(term: CloudDriveTerm): void {
    this.selectedCloudDriveTerm.set(term);
  }

  selectCloudDrivePlan(plan: CloudDrivePlan, ev: Event): void {
    ev.preventDefault();
    this.topics.ask(`Cloud Drive ${plan.storage} - ${this.activeCloudDriveTerm().label} - ${this.cloudDriveQuantity()} users`);
    this.overlay.open('callback');
  }

  readonly cloudBackupTerms: readonly { key: CloudBackupTerm; label: string; saving: string }[] = [
    { key: 'monthly', label: 'Monthly', saving: '' },
    { key: 'quarterly', label: 'Quarterly', saving: 'Save 5%' },
    { key: '6m', label: '6 Months', saving: 'Save 7.5%' },
    { key: 'yearly', label: 'Yearly', saving: 'Save 10%' },
  ];

  readonly cloudBackupPlans: readonly CloudBackupPlan[] = [
    { storage: '50 GB', monthly: 297, quarterly: 891, '6m': 1782, yearly: 3563 },
    { storage: '100 GB', monthly: 594, quarterly: 1782, '6m': 3564, yearly: 7125 },
    { storage: '250 GB', monthly: 1484, quarterly: 4452, '6m': 8904, yearly: 17812 },
    { storage: '500 GB', monthly: 2850, quarterly: 8550, '6m': 17100, yearly: 34200 },
    { storage: '1 TB', monthly: 5700, quarterly: 17100, '6m': 34200, yearly: 68400 },
  ];

  readonly selectedCloudBackupTerm = signal<CloudBackupTerm>('yearly');
  readonly cloudBackupQuantity = signal(1);
  readonly cloudBackupCountries = [
    { key: 'IN', label: 'India', flag: 'in', currency: 'INR', locale: 'en-IN' },
    { key: 'UK', label: 'UK', flag: 'gb', currency: 'GBP', locale: 'en-GB' },
    { key: 'AE', label: 'UAE', flag: 'ae', currency: 'AED', locale: 'en-AE' },
    { key: 'US', label: 'USA', flag: 'us', currency: 'USD', locale: 'en-US' },
    { key: 'SG', label: 'Singapore', flag: 'sg', currency: 'SGD', locale: 'en-SG' },
  ] as const;
  readonly selectedCloudBackupCountry = signal<CloudBackupCountry>('IN');
  readonly activeCloudBackupCountry = computed(() =>
    this.cloudBackupCountries.find(country => country.key === this.selectedCloudBackupCountry())!
  );

  // Fixed local-currency units per INR; refresh this snapshot when updating prices.
  // Source: https://www.xe.com/en-us/currencytables/?from=INR&date=2026-09-14
  // Rates as of 2026-09-14 16:00 UTC.
  readonly cloudBackupExchangeRates: Record<Exclude<CloudBackupCountry, 'IN'>, number> = {
    UK: 0.0077416692863518325,
    AE: 0.03836205294583207,
    US: 0.010445759821873948,
    SG: 0.01326886632649924,
  };

  cloudBackupRegionalPrice(plan: CloudBackupPlan): number {
    const country = this.selectedCloudBackupCountry();
    const basePrice = this.cloudBackupPrice(plan);
    return country === 'IN' ? basePrice
      : Math.round(basePrice * 1.2 * this.cloudBackupExchangeRates[country] * 100) / 100;
  }

  formatCloudBackupPrice(plan: CloudBackupPlan, quantity = 1): string {
    const amount = this.cloudBackupRegionalPrice(plan);
    if (amount === undefined) return 'Coming soon';
    const country = this.activeCloudBackupCountry();
    return new Intl.NumberFormat(country.locale, {
      style: 'currency', currency: country.currency, maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(amount * quantity);
  }

  readonly activeCloudBackupTerm = computed(
    () => this.cloudBackupTerms.find((term) => term.key === this.selectedCloudBackupTerm()) ?? this.cloudBackupTerms[0]
  );

  cloudBackupPrice(plan: CloudBackupPlan): number {
    if (this.selectedCloudBackupTerm() === 'yearly') {
      return Math.round(plan.monthly * 12 * 0.9);
    }
    return plan[this.selectedCloudBackupTerm()];
  }

  selectCloudBackupTerm(term: CloudBackupTerm): void {
    this.selectedCloudBackupTerm.set(term);
  }

  changeCloudBackupQuantity(change: number): void {
    this.cloudBackupQuantity.update(value => Math.max(1, Math.min(99, value + change)));
  }

  selectCloudBackupPlan(plan: CloudBackupPlan, ev: Event): void {
    ev.preventDefault();
    if (this.cloudBackupRegionalPrice(plan) === undefined) return;
    const term = this.activeCloudBackupTerm().label;
    const price = `${this.formatCloudBackupPrice(plan)}/${term.toLowerCase()}`;
    const name = `Cloud Backup - ${plan.storage} - ${term} - ${this.activeCloudBackupCountry().label}`;
    const country = this.activeCloudBackupCountry();
    this.cart.add(name, price, this.cloudBackupQuantity(), {
      unitAmount: this.cloudBackupRegionalPrice(plan),
      currency: country.currency,
      locale: country.locale,
      suffix: `/${term.toLowerCase()}${country.key === 'IN' ? ' + GST' : ''}`,
    });
    this.cart.open();
  }

  /* ----------------------------------------------------------------- seo */

  private jsonLd(v: ProductView, slug: string): Record<string, unknown> {
    const price = v.chips.find((c) => c.kind === 'price')?.label ?? '';
    const amount = /₹\s*([\d,]+)/.exec(price)?.[1]?.replace(/,/g, '');
    return {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: v.name,
      description: v.overview.slice(0, 300),
      category: v.cat,
      url: SITE.siteUrl.replace(/\/$/, '') + '/' + slug + '/',
      brand: { '@type': 'Brand', name: SITE.shortName },
      provider: {
        '@type': 'Organization',
        name: SITE.company,
        url: SITE.siteUrl,
        telephone: SITE.phone,
        email: SITE.email,
      },
      ...(amount
        ? {
            offers: {
              '@type': 'AggregateOffer',
              priceCurrency: 'INR',
              lowPrice: amount,
              availability: 'https://schema.org/InStock',
              seller: { '@type': 'Organization', name: SITE.company },
            },
          }
        : {}),
    };
  }
}
