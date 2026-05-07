import { motion } from 'framer-motion'
import './App.css'

function App() {
  const assetBase = import.meta.env.BASE_URL

  return (
    <main className="page">
      <nav className="top-nav">
        <div className="top-nav-inner">
          <div className="brand-wrap">
            <a href="/" aria-label="Go to product execution homepage">
              <img src={`${assetBase}instacart-logo.png`} alt="Instacart logo" className="brand-logo" />
            </a>
            <span className="brand-meta">| Product Execution · Vishwajeet Jayanthi Karthikeyan</span>
          </div>
          <div className="top-nav-links" aria-label="Section navigation">
            <a href="#problem-01">01 · Postcodes</a>
            <a href="#problem-02">02 · Retailers</a>
            <a href="#problem-03">03 · Conversion RCA</a>
            <a href="#summary">Summary</a>
          </div>
        </div>
      </nav>

      <section className="hero section-shell">
        <span className="pill">Product Execution</span>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sydney Launch - Execution Playbook
        </motion.h1>
        <p className="hero-sub">
          Three connected problem statements: sizing the addressable market down to 400 priority postcodes, selecting
          the right five retailers for pilot, and diagnosing a 10-point search-to-basket conversion drop in-market.
        </p>
        <div className="kpi-grid">
          <article className="kpi-card">
            <p className="kpi-label">Postcodes Targeted</p>
            <p className="kpi-value">400 / 700</p>
            <p className="kpi-sub">High and middle-income clusters in Greater Sydney</p>
          </article>
          <article className="kpi-card">
            <p className="kpi-label">Retailer Pilot</p>
            <p className="kpi-value">5 of 20</p>
            <p className="kpi-sub">Selected by BD using a metric-driven scorecard</p>
          </article>
          <article className="kpi-card">
            <p className="kpi-label">Conversion Drop</p>
            <p className="kpi-value">−10 pp</p>
            <p className="kpi-sub">Search → Basket fell from 80% to 70% in 30 days</p>
          </article>
        </div>
      </section>

      {/* PROBLEM 01 */}
      <section id="problem-01" className="section-shell section-alt">
        <header className="section-header">
          <span className="pill">Problem 01 · Market Sizing</span>
          <h2>Sydney Postcode Selection - 700 → 400</h2>
          <p className="section-sub">
            Identify the 400 highest-value postcodes within the 700 in Greater Sydney to prioritize Instacart launch
            coverage, capacity planning, and shopper supply.
          </p>
        </header>

        <div className="card-grid">
          <article className="card">
            <h3 className="card-title">Clarifications &amp; Assumptions</h3>
            <ul className="card-list">
              <li>Operating fully aligned with Australian regulatory requirements</li>
              <li>Scope is Greater Sydney metropolitan area</li>
              <li>Leveraging Instacart's Global Ops with similar delivery logistics</li>
              <li>App-based deliveries only at launch</li>
            </ul>
          </article>

          <article className="card">
            <h3 className="card-title">Mission &amp; Business Goals</h3>
            <p className="card-body">
              Bring every household requirement to users at the click of a button - accessible and easy.
            </p>
            <ul className="card-list">
              <li>Preserve Instacart's value proposition for users, shoppers, and retailers</li>
              <li>Replicate the same three-sided marketplace economics in a new geography</li>
              <li>Drive density first, breadth second</li>
            </ul>
          </article>

          <article className="card">
            <h3 className="card-title">Customer &amp; Competition</h3>
            <p className="card-body">
              Target customer: busy people juggling work, study, and family responsibilities, plus users who don't have
              ready transportation to a store.
            </p>
            <ul className="card-list">
              <li>Competitors: Amazon, Walmart, Coles - established logistics &amp; delivery operators</li>
              <li>Differentiator: shopper network + retailer breadth + speed</li>
            </ul>
          </article>
        </div>

        <header className="section-header subsection-header">
          <span className="pill pill-soft">Estimation</span>
          <h3 className="subsection-title">From 700 postcodes to a 400-postcode target</h3>
        </header>

        <div className="scenario-grid">
          <article className="scenario-card scenario-happy">
            <p className="scenario-tag">Happy Case</p>
            <p className="scenario-headline">~400 postcodes</p>
            <p className="scenario-formula">60% of 700 ≈ 400</p>
            <ul className="card-list">
              <li>40% downtown Sydney</li>
              <li>60% Greater Sydney regions</li>
              <li>Even adoption across income tiers</li>
            </ul>
          </article>

          <article className="scenario-card scenario-actual">
            <p className="scenario-tag">Actual Case</p>
            <p className="scenario-headline">~300 priority postcodes</p>
            <p className="scenario-formula">600 reachable → 300 target (high income)</p>
            <ul className="card-list">
              <li>20% downtown / 80% Greater Sydney</li>
              <li>600 postcodes with viable user demand</li>
              <li>Income split: 300 high · 200 middle · 100 low</li>
              <li>Phase 1 target: 300 high-income postcodes</li>
            </ul>
          </article>
        </div>

        <header className="section-header subsection-header">
          <span className="pill pill-soft">Consideration Factors</span>
          <h3 className="subsection-title">Postcode prioritization model</h3>
        </header>
        <div className="chip-row">
          <span className="chip">Income</span>
          <span className="chip-op">+</span>
          <span className="chip">Transportation Access</span>
          <span className="chip-op">+</span>
          <span className="chip">Commute Time</span>
          <span className="chip-op">+</span>
          <span className="chip">Population Density</span>
        </div>

        <header className="section-header subsection-header">
          <span className="pill pill-soft">Decision Formula</span>
          <h3 className="subsection-title">Yes / No rule for each postcode</h3>
          <p className="section-sub">
            Two-step gate: a postcode must clear the hard gates, then earn a weighted score above the threshold.
            All four inputs are normalized to [0, 1] across the 700 postcodes.
          </p>
        </header>

        <div className="formula-card">
          <p className="formula-tag">Postcode Score</p>
          <p className="formula-expression">
            <span className="formula-var">S</span>
            <span className="formula-eq">=</span>
            <span className="formula-term"><span className="formula-weight">0.35</span> · I</span>
            <span className="formula-plus">+</span>
            <span className="formula-term"><span className="formula-weight">0.25</span> · D</span>
            <span className="formula-plus">+</span>
            <span className="formula-term"><span className="formula-weight">0.20</span> · (1 − T)</span>
            <span className="formula-plus">+</span>
            <span className="formula-term"><span className="formula-weight">0.20</span> · C</span>
          </p>
          <p className="formula-note">
            All four inputs are min-max normalized to [0, 1] across the 700 Greater Sydney postcodes, so S itself
            lands in [0, 1]. Inputs are recomputed quarterly as fresh census &amp; transport data lands.
          </p>
        </div>

        <header className="section-header subsection-header">
          <span className="pill pill-soft">Component Detail</span>
          <h3 className="subsection-title">What each variable means and why it's in the formula</h3>
        </header>

        <div className="component-grid">
          <article className="component-card">
            <div className="component-head">
              <span className="component-letter">I</span>
              <span className="component-weight">w = 0.35</span>
            </div>
            <p className="component-name">Income</p>
            <p className="component-defn">Median household income at the postcode level (ABS Census).</p>
            <p className="component-direction">↑ Higher is better</p>
            <p className="component-why">
              <strong>Why it leads the model:</strong> our actual-case target is the 300 high-income postcodes -
              they have the largest baskets, the highest convenience-fee tolerance, and the best 90-day retention
              in every Instacart geography to date.
            </p>
          </article>

          <article className="component-card">
            <div className="component-head">
              <span className="component-letter">D</span>
              <span className="component-weight">w = 0.25</span>
            </div>
            <p className="component-name">Population Density</p>
            <p className="component-defn">Residents per km², from ABS area &amp; population data.</p>
            <p className="component-direction">↑ Higher is better</p>
            <p className="component-why">
              <strong>Why it matters:</strong> dense postcodes cut shopper drive-time between drops and unlock
              batched deliveries - the single biggest lever on our cost-per-order economics in Year 1.
            </p>
          </article>

          <article className="component-card">
            <div className="component-head">
              <span className="component-letter">1 − T</span>
              <span className="component-weight">w = 0.20</span>
            </div>
            <p className="component-name">Transportation Access (inverted)</p>
            <p className="component-defn">Composite of vehicle ownership + walkable transit coverage to a major supermarket.</p>
            <p className="component-direction">↓ Lower access → higher demand</p>
            <p className="component-why">
              <strong>Why we invert it:</strong> households that can't easily drive or transit to a store are
              the highest-intent delivery customers. We use (1 − T) so that "less access" pushes the score up,
              not down.
            </p>
          </article>

          <article className="component-card">
            <div className="component-head">
              <span className="component-letter">C</span>
              <span className="component-weight">w = 0.20</span>
            </div>
            <p className="component-name">Commute Time</p>
            <p className="component-defn">Average one-way journey-to-work time (ABS journey-to-work).</p>
            <p className="component-direction">↑ Higher is better</p>
            <p className="component-why">
              <strong>Why it's a proxy:</strong> matches our target persona - busy people juggling work, study,
              and family. Long commutes mean less time to shop, which is exactly the willingness-to-pay we want.
            </p>
          </article>
        </div>

        <div className="rationale-card">
          <p className="rationale-tag">Weight Rationale</p>
          <p className="rationale-body">
            Income carries 35% because it's the strongest historical predictor of basket size and retention.
            Density and inverted-transport split 25% / 20% because both drive delivery economics and demand -
            density is slightly higher because it directly compounds with shopper utilization. Commute time gets
            20% as the persona proxy. These are <strong>starting priors</strong>; after the pilot we re-fit
            weights against observed Sydney conversion, retention, and contribution-margin data.
          </p>
        </div>

        <header className="section-header subsection-header">
          <span className="pill pill-soft">Worked Example</span>
          <h3 className="subsection-title">Two Sydney postcodes scored end-to-end</h3>
        </header>

        <div className="example-grid">
          <article className="example-card example-yes">
            <div className="example-head">
              <p className="example-postcode">2027 · Darling Point</p>
              <span className="example-verdict verdict-yes">YES · Tier 1</span>
            </div>
            <p className="example-profile">High-income, dense inner-east, long commutes into CBD, lower car dependence.</p>
            <table className="example-table">
              <thead>
                <tr><th>Input</th><th>Value</th><th>×</th><th>Weight</th><th>=</th><th>Score</th></tr>
              </thead>
              <tbody>
                <tr><td>I</td><td>0.92</td><td>×</td><td>0.35</td><td>=</td><td>0.322</td></tr>
                <tr><td>D</td><td>0.85</td><td>×</td><td>0.25</td><td>=</td><td>0.213</td></tr>
                <tr><td>1 − T</td><td>0.70</td><td>×</td><td>0.20</td><td>=</td><td>0.140</td></tr>
                <tr><td>C</td><td>0.75</td><td>×</td><td>0.20</td><td>=</td><td>0.150</td></tr>
              </tbody>
            </table>
            <p className="example-total">S = <strong>0.83</strong> → above 0.65 threshold</p>
          </article>

          <article className="example-card example-no">
            <div className="example-head">
              <p className="example-postcode">2756 · Richmond (outer fringe)</p>
              <span className="example-verdict verdict-no">NO · Defer</span>
            </div>
            <p className="example-profile">Lower density, lower median income, high car ownership, shorter local commutes.</p>
            <table className="example-table">
              <thead>
                <tr><th>Input</th><th>Value</th><th>×</th><th>Weight</th><th>=</th><th>Score</th></tr>
              </thead>
              <tbody>
                <tr><td>I</td><td>0.30</td><td>×</td><td>0.35</td><td>=</td><td>0.105</td></tr>
                <tr><td>D</td><td>0.20</td><td>×</td><td>0.25</td><td>=</td><td>0.050</td></tr>
                <tr><td>1 − T</td><td>0.15</td><td>×</td><td>0.20</td><td>=</td><td>0.030</td></tr>
                <tr><td>C</td><td>0.40</td><td>×</td><td>0.20</td><td>=</td><td>0.080</td></tr>
              </tbody>
            </table>
            <p className="example-total">S = <strong>0.27</strong> → below 0.50 threshold</p>
          </article>
        </div>

        <header className="section-header subsection-header">
          <span className="pill pill-soft">Hard Gates</span>
          <h3 className="subsection-title">Knockout criteria - all must be true</h3>
        </header>
        <div className="gate-row">
          <span className="gate-chip">In Greater Sydney</span>
          <span className="gate-chip">Reachable by Global Ops within SLA</span>
          <span className="gate-chip">Min density floor (≥ 1,000 / km²)</span>
        </div>

        <header className="section-header subsection-header">
          <span className="pill pill-soft">Decision</span>
          <h3 className="subsection-title">Threshold tiers</h3>
        </header>
        <div className="decision-grid">
          <article className="decision-card decision-yes">
            <p className="decision-tag">YES · Tier 1</p>
            <p className="decision-headline">S ≥ 0.65</p>
            <p className="decision-body">Launch wave 1 - ~300 highest-priority postcodes (high-income clusters).</p>
          </article>
          <article className="decision-card decision-watch">
            <p className="decision-tag">YES · Tier 2</p>
            <p className="decision-headline">0.50 ≤ S &lt; 0.65</p>
            <p className="decision-body">Launch wave 2 - additional ~100 postcodes added once wave 1 is stable.</p>
          </article>
          <article className="decision-card decision-no">
            <p className="decision-tag">NO · Defer</p>
            <p className="decision-headline">S &lt; 0.50</p>
            <p className="decision-body">Hold for future expansion; revisit once density or income shifts.</p>
          </article>
        </div>
      </section>

      {/* PROBLEM 02 */}
      <section id="problem-02" className="section-shell">
        <header className="section-header">
          <span className="pill">Problem 02 · Retailer Pilot</span>
          <h2>20 → 5 Retailers for Pilot Selection</h2>
          <p className="section-sub">
            BD has shortlisted 20 retailers for the Sydney pilot. The goal isn't just to pick the five "biggest" -
            it's to pick the five whose existing distribution we can amplify, contribute meaningfully to their growth,
            and convert into case studies that strengthen our negotiating position with the next wave of retailers.
          </p>
        </header>

        {/* Strategic logic flow */}
        <header className="section-header subsection-header">
          <span className="pill pill-soft">Strategic Logic</span>
          <h3 className="subsection-title">Why this selection lens, not just performance</h3>
        </header>
        <div className="strategy-flow">
          <div className="strategy-step">
            <p className="strategy-num">01</p>
            <p className="strategy-title">Pick retailers with existing distribution</p>
            <p className="strategy-body">Strong store footprint &amp; supply chain - they already know how to move units; we don't carry the operational lift on Day 1.</p>
          </div>
          <span className="strategy-arrow" aria-hidden="true">→</span>
          <div className="strategy-step">
            <p className="strategy-num">02</p>
            <p className="strategy-title">Scale their reach &amp; contribute to growth</p>
            <p className="strategy-body">We unlock incremental demand outside their current online channel - they grow faster than they would alone.</p>
          </div>
          <span className="strategy-arrow" aria-hidden="true">→</span>
          <div className="strategy-step">
            <p className="strategy-num">03</p>
            <p className="strategy-title">Convert wins into case studies</p>
            <p className="strategy-body">Document GMV lift, new-customer share, and basket economics - turn them into BD ammunition.</p>
          </div>
          <span className="strategy-arrow" aria-hidden="true">→</span>
          <div className="strategy-step">
            <p className="strategy-num">04</p>
            <p className="strategy-title">Negotiate better terms with future retailers</p>
            <p className="strategy-body">By the time we approach the next 20, we have proof points and operational maturity - better economics, faster integrations.</p>
          </div>
        </div>

        {/* Existing performance metrics - reframed as post-launch tracking */}
        <header className="section-header subsection-header">
          <span className="pill pill-soft">Post-Launch Tracking</span>
          <h3 className="subsection-title">How we measure the five once they're live</h3>
          <p className="section-sub">
            One north star, three success metrics, three guardrails, three health metrics - every metric carries a
            target and a clear reason it's tracked.
          </p>
        </header>
        <div className="metric-grid">
          <article className="metric-card metric-northstar">
            <p className="metric-tag">North Star</p>
            <p className="metric-headline">Successful deliveries per store per day</p>
            <p className="metric-body">
              A single composite of demand × fulfillment quality × capacity - the truest signal that the retailer is
              moving incremental units through Instacart at scale.
            </p>
            <div className="sub-metrics">
              <div className="sub-metric">
                <span className="sub-metric-num">★</span>
                <p className="sub-metric-name">Successful deliveries / store / day</p>
                <p className="sub-metric-target">Target: ≥ 60 / store / day by week 12</p>
                <p className="sub-metric-why">Tracks against the launch ramp curve; trips a review if 4 weeks below target.</p>
              </div>
            </div>
          </article>

          <article className="metric-card metric-success">
            <p className="metric-tag">Success · 3 Metrics</p>
            <p className="metric-headline">Are we delivering value to customers and retailers?</p>

            <div className="sub-metrics">
              <div className="sub-metric">
                <span className="sub-metric-num">1</span>
                <p className="sub-metric-name">Order Fulfillment Rate</p>
                <p className="sub-metric-target">Target: ≥ 97%</p>
                <p className="sub-metric-why">Initiated orders that complete without retailer-side failure.</p>
              </div>
              <div className="sub-metric">
                <span className="sub-metric-num">2</span>
                <p className="sub-metric-name">On-Time Delivery Rate</p>
                <p className="sub-metric-target">Target: ≥ 92%</p>
                <p className="sub-metric-why">Orders delivered within the customer-promised window.</p>
              </div>
              <div className="sub-metric">
                <span className="sub-metric-num">3</span>
                <p className="sub-metric-name">Order Accuracy (customer-reported)</p>
                <p className="sub-metric-target">Target: ≥ 96%</p>
                <p className="sub-metric-why">Orders with no missing-item or wrong-item complaint.</p>
              </div>
            </div>
          </article>

          <article className="metric-card metric-guardrail">
            <p className="metric-tag">Guardrails · 3 Metrics</p>
            <p className="metric-headline">Don't break the in-store or retailer experience</p>

            <div className="sub-metrics">
              <div className="sub-metric">
                <span className="sub-metric-num">1</span>
                <p className="sub-metric-name">Substitution Rate</p>
                <p className="sub-metric-target">Target: ≤ 12%</p>
                <p className="sub-metric-why">Items swapped at picking due to OOS - high values erode trust fast.</p>
              </div>
              <div className="sub-metric">
                <span className="sub-metric-num">2</span>
                <p className="sub-metric-name">Cancellation &amp; Refund Rate</p>
                <p className="sub-metric-target">Target: ≤ 3%</p>
                <p className="sub-metric-why">Operational cancellations + refunds; protects unit economics.</p>
              </div>
              <div className="sub-metric">
                <span className="sub-metric-num">3</span>
                <p className="sub-metric-name">Shopper In-Store Wait Time</p>
                <p className="sub-metric-target">Target: ≤ 8 min (median)</p>
                <p className="sub-metric-why">Keeps store-floor friction low - protects retailer relationship.</p>
              </div>
            </div>
          </article>

          <article className="metric-card metric-health">
            <p className="metric-tag">Health · 3 Metrics</p>
            <p className="metric-headline">Long-term partnership viability</p>

            <div className="sub-metrics">
              <div className="sub-metric">
                <span className="sub-metric-num">1</span>
                <p className="sub-metric-name">Catalog Coverage</p>
                <p className="sub-metric-target">Target: ≥ 90% of in-store SKUs</p>
                <p className="sub-metric-why">Online breadth must mirror the shelf; gaps drive customer churn.</p>
              </div>
              <div className="sub-metric">
                <span className="sub-metric-num">2</span>
                <p className="sub-metric-name">Price Parity vs In-Store</p>
                <p className="sub-metric-target">Target: ≤ +5% gap</p>
                <p className="sub-metric-why">Markups above this break trust and feed competitor narratives.</p>
              </div>
              <div className="sub-metric">
                <span className="sub-metric-num">3</span>
                <p className="sub-metric-name">Integration Uptime</p>
                <p className="sub-metric-target">Target: ≥ 99.5%</p>
                <p className="sub-metric-why">POS / inventory feed health; outages cascade into substitutions.</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* PROBLEM 03 */}
      <section id="problem-03" className="section-shell section-alt">
        <header className="section-header">
          <span className="pill">Problem 03 · Conversion RCA</span>
          <h2>Search → Basket Conversion Drop · How I Would Diagnose It</h2>
          <p className="section-sub">
            If a material conversion regression appeared in Sydney, this is the path I would take - sanity-check
            the signal, walk the funnel to find <em>where</em> it is breaking, build a MECE tree for
            <em> why</em> it may be breaking, then validate, fix, and codify the learnings.
          </p>
        </header>

        {/* Sanity check - narrative */}
        <div className="rca-block">
          <p className="rca-step-tag">First, I would sanity-check the signal</p>
          <p className="rca-narrative">
            Before touching a single product hypothesis, I would sit down with Data &amp; Engineering.
            Conversion metrics drift for instrumentation reasons more often than people admit, and I would not
            want the team chasing a phantom. I would confirm the metric definition has not changed, the event
            pipelines are fresh, no schema migration coincides with the start date, and no recent deployment or
            feature-flag rollout sits suspiciously on the curve.
          </p>
          <p className="rca-metrics-note">
            <strong>Metrics I inspected:</strong> event volume vs. prior month, schema diffs across search /
            PDP / cart events, deployment markers, feature-flag rollout timestamps, A/B holdout integrity.
          </p>
        </div>

        {/* Funnel - narrative */}
        <div className="rca-block">
          <p className="rca-step-tag">Then I would walk the funnel to localize the leak</p>
          <p className="rca-narrative">
            With the signal validated, I would walk the conversion path one stage at a time. Search → Basket is
            not a single number - it is a chain of transition rates. The rate that actually moved would tell me
            where to focus the root-cause work; the rates that held would tell me where I do not need to look.
          </p>
        </div>

        {/* FUNNEL VISUAL */}
        <div className="funnel">
          <div className="funnel-stage funnel-stage-1">
            <p className="funnel-stage-name">Search Submitted</p>
            <p className="funnel-stage-defn">User issues a query.</p>
          </div>

          <div className="funnel-edge">
            <span className="funnel-arrow" aria-hidden="true">▼</span>
            <p className="funnel-edge-name">Search Result Rate</p>
            <p className="funnel-edge-metrics">zero-result rate · search latency p95 · results-per-query · fallback / null-state hits</p>
          </div>

          <div className="funnel-stage funnel-stage-2">
            <p className="funnel-stage-name">Results Returned</p>
            <p className="funnel-stage-defn">SERP rendered to the user.</p>
          </div>

          <div className="funnel-edge">
            <span className="funnel-arrow" aria-hidden="true">▼</span>
            <p className="funnel-edge-name">Result Click-Through Rate</p>
            <p className="funnel-edge-metrics">position-1 CTR · top-K CTR · search-to-PDP click rate · ranking-model version</p>
          </div>

          <div className="funnel-stage funnel-stage-3">
            <p className="funnel-stage-name">PDP Viewed</p>
            <p className="funnel-stage-defn">User taps a result and lands on a product page.</p>
          </div>

          <div className="funnel-edge">
            <span className="funnel-arrow" aria-hidden="true">▼</span>
            <p className="funnel-edge-name">PDP → Add-to-Cart Rate</p>
            <p className="funnel-edge-metrics">PDP bounce · time-on-PDP · fee &amp; price display · OOS-badge rate · substitution prompt</p>
          </div>

          <div className="funnel-stage funnel-stage-4">
            <p className="funnel-stage-name">Add-to-Cart Tapped</p>
            <p className="funnel-stage-defn">Intent confirmed.</p>
          </div>

          <div className="funnel-edge">
            <span className="funnel-arrow" aria-hidden="true">▼</span>
            <p className="funnel-edge-name">ATC Success Rate</p>
            <p className="funnel-edge-metrics">client-side error rate · basket-API failure rate · cart-capacity errors · retry rate</p>
          </div>

          <div className="funnel-stage funnel-stage-5">
            <p className="funnel-stage-name">Item in Basket</p>
            <p className="funnel-stage-defn">Conversion complete.</p>
          </div>
        </div>

        {/* MECE Tree - narrative */}
        <div className="rca-block">
          <p className="rca-step-tag">With the leak narrowed, I would build the cause tree</p>
          <p className="rca-narrative">
            Once the funnel points me at one transition, I would map possible causes into a tree that splits
            cleanly into three buckets - things <em>we</em> changed that hurt the funnel (Internal), things in the
            <em> market</em> that shifted (External), and the one I always force the team to check explicitly:
            <em> cannibalization</em>, where a new internal path we ship quietly absorbs the conversion.
            A live example here: if we launch an <strong>AI-powered voice agent</strong> that creates a brand-new
            add-to-cart journey, the search → basket rate can look broken even though total ATC is healthy. The
            "drop" is users converting on a different surface - the metric needs to follow the user, not the path.
          </p>
        </div>

        {/* MECE TREE VISUAL */}
        <div className="mece-tree mece-tree-3">
          <div className="mece-root">
            <p className="mece-root-tag">Root</p>
            <p className="mece-root-title">Why did this transition rate drop?</p>
          </div>

          <div className="mece-branch mece-branch-internal">
            <p className="mece-branch-tag">Internal</p>
            <p className="mece-branch-defn">We changed something</p>
          </div>
          <div className="mece-leaves mece-leaves-internal">
            <article className="leaf-card">
              <p className="leaf-title">Product / UX changes</p>
              <p className="leaf-metrics">search-ranking model deploys · PDP layout A/B IDs · ATC button visibility · fee &amp; price display experiments</p>
            </article>
            <article className="leaf-card">
              <p className="leaf-title">Data / Logging / Infra</p>
              <p className="leaf-metrics">event-volume delta · schema drift · p95 latency · client error rate · CDN &amp; API uptime</p>
            </article>
            <article className="leaf-card">
              <p className="leaf-title">Catalog / Pricing</p>
              <p className="leaf-metrics">SKU coverage % · OOS rate · price-vs-shelf gap · retailer integration uptime · substitution rate</p>
            </article>
          </div>

          <div className="mece-branch mece-branch-external">
            <p className="mece-branch-tag">External</p>
            <p className="mece-branch-defn">Market or context shifted</p>
          </div>
          <div className="mece-leaves mece-leaves-external">
            <article className="leaf-card">
              <p className="leaf-title">Competitor activity</p>
              <p className="leaf-metrics">competitor promo intensity · price-index spread · app-store rank deltas · share-of-voice</p>
            </article>
            <article className="leaf-card">
              <p className="leaf-title">Demand shifts</p>
              <p className="leaf-metrics">search-volume index · query-mix shift · basket-size distribution · day-of-week mix · seasonality index</p>
            </article>
            <article className="leaf-card">
              <p className="leaf-title">Cohort / Channel drift</p>
              <p className="leaf-metrics">new vs returning split · iOS / Android / Web split · postcode-level rates · acquisition channel mix</p>
            </article>
          </div>

          <div className="mece-branch mece-branch-cannibalize">
            <p className="mece-branch-tag">Cannibalization</p>
            <p className="mece-branch-defn">A new path we shipped is absorbing it</p>
          </div>
          <div className="mece-leaves mece-leaves-cannibalize">
            <article className="leaf-card leaf-card-accent">
              <p className="leaf-title">AI Voice Agent - net-new ATC journey</p>
              <p className="leaf-metrics">voice-agent ATC volume · share of total ATC by surface · voice adoption curve · total ATC vs baseline · search-session → voice-ATC stitch rate</p>
            </article>
            <article className="leaf-card">
              <p className="leaf-title">Adjacent in-app surfaces</p>
              <p className="leaf-metrics">"buy it again" tile ATC · push-notification deep-link conversion · recipe-page ATC · home-feed ATC</p>
            </article>
            <article className="leaf-card">
              <p className="leaf-title">Off-funnel conversion</p>
              <p className="leaf-metrics">auto-replenish / subscription orders · account-level reorder rate · retailer-direct hand-offs · BOPIS pickup orders</p>
            </article>
          </div>
        </div>

        {/* Investigation Experiments */}
        <div className="rca-block">
          <p className="rca-step-tag">Then I would design experiments to settle the surviving branches</p>
          <p className="rca-narrative">
            A hypothesis tree without experiments is just a wishlist. For each surviving branch I would scope a
            specific experiment with a single primary metric and a pre-committed decision rule, so the team
            does not relitigate the call after the data comes back.
          </p>
        </div>

        <div className="experiment-grid">
          <article className="experiment-card experiment-priority">
            <div className="experiment-head">
              <span className="experiment-tag">Experiment 01 · Highest priority</span>
              <span className="experiment-status status-active">Cannibalization</span>
            </div>
            <p className="experiment-title">Voice-agent attribution audit</p>
            <div className="experiment-grid-rows">
              <p className="experiment-row"><span>Hypothesis</span> A share of the missing search → ATC volume is converting via the AI voice agent.</p>
              <p className="experiment-row"><span>Treatment</span> No traffic change. Session-level join of search sessions ↔ voice-agent ATC events; reattribute baskets to the originating discovery surface.</p>
              <p className="experiment-row"><span>Primary metric</span> % of post-launch ATC originating from voice agent; total ATC across all surfaces vs baseline.</p>
              <p className="experiment-row"><span>Decision</span> If total ATC is flat-or-up while search → ATC is down, redefine the NSM to "ATC across all paths" - stop treating this as a regression.</p>
            </div>
          </article>

          <article className="experiment-card">
            <div className="experiment-head">
              <span className="experiment-tag">Experiment 02</span>
              <span className="experiment-status status-internal">Internal · Product</span>
            </div>
            <p className="experiment-title">Ranking-model rollback A/B</p>
            <div className="experiment-grid-rows">
              <p className="experiment-row"><span>Hypothesis</span> The ranking-model deploy in week N is depressing CTR and downstream conversion.</p>
              <p className="experiment-row"><span>Treatment</span> Revert to the prior model in 50% of search traffic, holdout for 14 days.</p>
              <p className="experiment-row"><span>Primary metric</span> Position-1 CTR, search → PDP click rate.</p>
              <p className="experiment-row"><span>Decision</span> If treatment recovers CTR by a meaningful, stat-sig margin, ship the rollback and re-train.</p>
            </div>
          </article>

          <article className="experiment-card">
            <div className="experiment-head">
              <span className="experiment-tag">Experiment 03</span>
              <span className="experiment-status status-internal">Internal · UX</span>
            </div>
            <p className="experiment-title">PDP fee-display three-arm test</p>
            <div className="experiment-grid-rows">
              <p className="experiment-row"><span>Hypothesis</span> Fee placement on PDP is suppressing add-to-cart intent.</p>
              <p className="experiment-row"><span>Treatment</span> 3-arm A/B: fee at PDP top · fee at PDP bottom · fee deferred to cart.</p>
              <p className="experiment-row"><span>Primary metric</span> PDP → ATC rate.</p>
              <p className="experiment-row"><span>Decision</span> Ship the variant restoring baseline ATC; only ship if no negative move on price-transparency complaints.</p>
            </div>
          </article>

          <article className="experiment-card">
            <div className="experiment-head">
              <span className="experiment-tag">Experiment 04</span>
              <span className="experiment-status status-internal">Internal · Infra</span>
            </div>
            <p className="experiment-title">Latency holdback</p>
            <div className="experiment-grid-rows">
              <p className="experiment-row"><span>Hypothesis</span> A perf regression on search/PDP latency is causing abandonment.</p>
              <p className="experiment-row"><span>Treatment</span> Roll back the suspect commit on 25% of traffic.</p>
              <p className="experiment-row"><span>Primary metric</span> p95 latency, PDP bounce, full-funnel conversion.</p>
              <p className="experiment-row"><span>Decision</span> If latency returns to baseline AND conversion recovers in treatment, ship the perf fix.</p>
            </div>
          </article>

          <article className="experiment-card">
            <div className="experiment-head">
              <span className="experiment-tag">Experiment 05</span>
              <span className="experiment-status status-internal">Internal · Catalog</span>
            </div>
            <p className="experiment-title">Retailer-feed integrity sweep</p>
            <div className="experiment-grid-rows">
              <p className="experiment-row"><span>Hypothesis</span> One or more retailer feeds are stale, inflating OOS and substitutions.</p>
              <p className="experiment-row"><span>Treatment</span> Re-sync top-3 retailer feeds on a fresh cadence (operational, not user-facing).</p>
              <p className="experiment-row"><span>Primary metric</span> OOS rate, substitution rate, PDP → ATC for affected retailers.</p>
              <p className="experiment-row"><span>Decision</span> If OOS drops and ATC recovers, formalize the fresher feed cadence and instrument an SLA alert.</p>
            </div>
          </article>

          <article className="experiment-card">
            <div className="experiment-head">
              <span className="experiment-tag">Experiment 06</span>
              <span className="experiment-status status-external">External</span>
            </div>
            <p className="experiment-title">Competitor-promo natural experiment</p>
            <div className="experiment-grid-rows">
              <p className="experiment-row"><span>Hypothesis</span> A competitor's Sydney-only promo period is suppressing demand on our funnel.</p>
              <p className="experiment-row"><span>Treatment</span> Compare conversion in Sydney vs other AU metros over the promo window; difference-in-differences.</p>
              <p className="experiment-row"><span>Primary metric</span> Search → ATC rate · Sydney vs control metros.</p>
              <p className="experiment-row"><span>Decision</span> If Sydney underperforms only during the promo window, attribute, monitor, and escalate to a counter-promo if recurring.</p>
            </div>
          </article>
        </div>

        {/* Validate, fix, codify */}
        <div className="rca-block">
          <p className="rca-step-tag">Then I would ship the fix and codify what I learned</p>
          <p className="rca-narrative">
            With experiments resolved and a leading hypothesis confirmed, I would ship the targeted fix and watch
            the transition rate recover against the baseline. After recovery, I would write up the diagnosis as a
            conversion-incident playbook and wire the leading indicators (zero-result rate, p95 latency, PDP
            bounce, ATC error rate, share of ATC by surface) into an alerting dashboard so the next regression -
            including the next cannibalization - gets caught while it is still small.
          </p>
        </div>
      </section>

      {/* SUMMARY */}
      <section id="summary" className="section-shell">
        <header className="section-header">
          <span className="pill">Summary</span>
          <h2>Putting it together</h2>
          <p className="section-sub">
            Three problem statements, one operating principle - frame the question rigorously, score the
            options with explicit and inspectable weights, and design experiments to settle whatever
            ambiguity remains.
          </p>
        </header>

        <div className="summary-grid">
          <article className="summary-card summary-01">
            <p className="summary-tag">01 · Market Sizing</p>
            <p className="summary-title">From 700 postcodes to a 400-postcode launch footprint</p>
            <ul className="summary-list">
              <li>
                <strong>Approach -</strong> hard gates (Greater Sydney, ops reachability, density floor),
                then a weighted score <em>S = 0.35·I + 0.25·D + 0.20·(1−T) + 0.20·C</em>, then tiered cutoffs.
              </li>
              <li>
                <strong>Output -</strong> ~300 high-priority postcodes for wave 1, ~100 for wave 2, the rest
                deferred for future expansion.
              </li>
              <li>
                <strong>Key takeaway -</strong> income leads the model because the actual-case target is
                the 300 high-income postcodes; weights are starting priors, re-fit against pilot data.
              </li>
            </ul>
          </article>

          <article className="summary-card summary-02">
            <p className="summary-tag">02 · Retailer Pilot</p>
            <p className="summary-title">Five partners selected for amplifiable distribution + room to grow</p>
            <ul className="summary-list">
              <li>
                <strong>Approach -</strong> existing distribution → we scale their reach &amp; contribute
                to growth → wins become case studies → better terms with future retailers.
              </li>
              <li>
                <strong>Output -</strong> a post-launch scorecard with one north star, three success
                metrics, three guardrails, and three health metrics, each with an explicit target.
              </li>
              <li>
                <strong>Key takeaway -</strong> the pilot is BD ammunition for the next 20, not just a
                launch list - pick partners we can grow alongside.
              </li>
            </ul>
          </article>

          <article className="summary-card summary-03">
            <p className="summary-tag">03 · Conversion RCA</p>
            <p className="summary-title">Diagnostic playbook for a search → basket regression</p>
            <ul className="summary-list">
              <li>
                <strong>Approach -</strong> sanity-check the signal → walk the funnel to localize the leak
                → MECE tree across <em>Internal · External · Cannibalization</em> → six experiments, each
                with hypothesis · treatment · primary metric · decision rule.
              </li>
              <li>
                <strong>Output -</strong> targeted fix shipped, leading-indicator dashboard wired
                (zero-result rate, p95 latency, PDP bounce, ATC error rate, share of ATC by surface),
                conversion-incident playbook documented.
              </li>
              <li>
                <strong>Key takeaway -</strong> when a new path ships (e.g., an AI voice agent that
                creates a brand-new ATC journey), the metric needs to follow the user, not the original
                path.
              </li>
            </ul>
          </article>
        </div>

        <div className="summary-principle">
          <p className="summary-principle-tag">Operating Principle</p>
          <p className="summary-principle-body">
            Across all three problems the same playbook holds: <strong>structure the question, score with
            transparent weights, and use experiments to remove the rest of the ambiguity</strong> - the
            way launch decisions, partner selection, and incident response stay defensible at the speed
            a new market launch demands.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <span>Instacart · Sydney Launch Execution</span>
          <span>Prepared by Vishwajeet Jayanthi Karthikeyan</span>
        </div>
      </footer>
    </main>
  )
}

export default App
