/**
 * Fragments - Knowledge-Based Micro-Reflections
 * Psychological insights on attachment, boundaries, and self-worth
 */

const quotes = [
    {
        text: "Willingness to understand requires what psychologists call 'epistemic trust' — the belief that the other person's explanations will be given in good faith. This trust develops slowly, through consistent patterns of patience, not through single acts of comprehension.",
        context: "On learning someone (Fonagy et al., epistemic trust theory)"
    },
    {
        text: "Boundaries are not rejections. They are acknowledgments of our finite emotional resources. What we can offer as a friend versus a partner reflects different capacities for vulnerability, not different levels of care.",
        context: "On relational boundaries (Brené Brown)"
    },
    {
        text: "Limerence — the involuntary cognitive and emotional state of intense romantic desire — activates the same neural pathways as addiction. The feeling is 'pure' not because it's virtuous, but because it bypasses rational evaluation entirely.",
        context: "On intense attraction (Tennov, limerence theory)"
    },
    {
        text: "Self-worth should not be contingent on being chosen. Psychologists distinguish between 'contingent self-esteem' (dependent on external validation) and 'true self-esteem' (rooted in inherent worth). The former is fragile; the latter, resilient.",
        context: "On conditional worth (Deci & Ryan, SDT)"
    },
    {
        text: "Emotional honesty without self-protection is not authenticity — it's self-abandonment. Showing feelings 'until they're gone' can become a form of emotional self-harm if the other person cannot hold them responsibly.",
        context: "On emotional regulation (Linehan, DBT)"
    },
    {
        text: "Neuroscience shows that significant relationships create lasting neural pathways. Even after conscious letting go, the brain retains these connections in implicit memory — forgotten in narrative, but encoded in how we respond to similar patterns.",
        context: "On relationship permanence (implicit memory, Schacter)"
    },
    {
        text: "Internalized shame — the belief that one's presence diminishes spaces — often originates from early relational trauma where the child learned their needs were burdensome. This becomes a self-fulfilling prophecy in adult relationships.",
        context: "On shame & belonging (shame resilience, Brown)"
    },
    {
        text: "Intermittent reinforcement — when someone is inconsistently available — creates stronger attachment than consistent presence. The uncertainty triggers the brain's dopamine system, making the relationship feel more intense than it actually is.",
        context: "On intermittent reinforcement (behavioral psychology)"
    },
    {
        text: "Anxious-avoidant attachment pairs create a 'protest-withdrawal' cycle: one person's pursuit triggers the other's retreat, which intensifies the pursuit. Both are trapped in a dance neither chose but both perpetuate.",
        context: "On attachment paradox (Levine & Heller)"
    },
    {
        text: "Cognitive dissonance — holding contradictory feelings — is not weakness. It's evidence that your emotional system is processing complexity. 'I like you AND I resent you' can both be true without canceling each other out.",
        context: "On ambivalence (Festinger, cognitive dissonance)"
    },
    {
        text: "Self-preservation is not selfishness. When the foundation of your self-worth is threatened, protecting it becomes psychologically necessary for survival. This is the difference between boundaries and walls.",
        context: "On protective boundaries (self-compassion, Neff)"
    },
    {
        text: "Dysregulation — the loss of emotional and cognitive control — often occurs when attachment figures fail to provide safety. The 'where is my logic' question signals that the limbic system has overridden the prefrontal cortex.",
        context: "On emotional flooding (Gottman, Porges)"
    },
    {
        text: "Spiritual bypassing — using faith to avoid psychological pain — prevents genuine healing. True return to faith involves bringing the wound TO the sacred, not pretending the wound doesn't exist.",
        context: "On spiritual integration (Welwood, spiritual bypassing)"
    },
    {
        text: "Unconditional love without boundaries is fusion, not connection. Healthy love requires what Esther Perel calls 'stable ambiguity' — closeness WITH separateness, togetherness WITH autonomy.",
        context: "On relational balance (Perel, paradox of intimacy)"
    },
    {
        text: "Self-prioritization after chronic self-abandonment feels selfish because our nervous system was trained to equate self-care with danger. This is not truth — this is conditioning that must be unlearned.",
        context: "On reparenting (IFS therapy, Schwartz)"
    },
    {
        text: "Maladaptive daydreaming disorder — when fantasy becomes more rewarding than reality — fills unmet attachment needs through imagined scenarios. The brain cannot distinguish between real and vividly imagined social connection.",
        context: "On fantasy as coping (Somer, MDD)"
    },
    {
        text: "The expectation-disappointment cycle: we create internal narratives about how others should behave, then suffer when reality contradicts these narratives. The pain is not from others' actions, but from the gap between expectation and reality.",
        context: "On suffering (Buddhist psychology, ACT)"
    },
    {
        text: "Conditional authenticity — showing only the parts of ourselves we believe are acceptable — prevents true intimacy. If someone cannot love 'all versions' of us, we are in relationship with an idealized image, not a person.",
        context: "On authentic relating (Rogers, unconditional positive regard)"
    },
    {
        text: "Hypervigilance in communication — constantly monitoring how words will be received — is a trauma response. When we cannot speak freely, we are not in a safe relationship, even if there is no overt threat.",
        context: "On relational safety (polyvagal theory, Porges)"
    },
    {
        text: "Attachment research shows that emotional reciprocity requires compatible responsiveness styles. When one person's secure giving meets another's avoidant receiving, the mismatch creates chronic disappointment regardless of effort.",
        context: "On attachment incompatibility (Hazan & Shaver)"
    },
    {
        text: "Emotional masking — strategic suppression of authentic feelings to maintain social bonds — is common in anxious attachment and people-pleasing. It prevents genuine connection while preserving the illusion of harmony.",
        context: "On emotional suppression (Gross & John)"
    },
    {
        text: "Realistic expectations are not pessimism — they are wisdom. Expecting everyone to recognize quality is a cognitive distortion called 'fairness fallacy.' Most people operate from their own wounds, not from objective assessment.",
        context: "On cognitive distortions (Beck, CBT)"
    },
    {
        text: "Rumination — the compulsive replay of thoughts about a person — indicates unresolved attachment anxiety. The mind loops because it's seeking closure or control in a situation where neither is available.",
        context: "On obsessive thinking (Nolen-Hoeksema, rumination)"
    },
    {
        text: "Escapism through fantasy is not inherently pathological. It becomes maladaptive when: (1) it interferes with daily functioning, (2) it feels more real than actual relationships, (3) it prevents engagement with reality.",
        context: "On healthy vs. unhealthy escapism (clinical psychology)"
    },
    {
        text: "The moment fantasy becomes preferable to reality is the moment our attachment system signals danger. The brain is trying to meet legitimate needs through the only avenue it perceives as safe — imagination.",
        context: "On attachment wounds (attachment theory)"
    }
];

// Function to display random quote
function displayRandomQuote() {
    const quoteBox = document.getElementById('quote-display');
    if (!quoteBox) return;
    
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    
    quoteBox.innerHTML = `
        <p class="quote-text">"${random.text}"</p>
        <cite class="quote-context">${random.context}</cite>
        <button class="quote-refresh-btn" onclick="displayRandomQuote()" aria-label="Show another thought">
            ↻ Another thought
        </button>
    `;
}

// Auto-display on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayRandomQuote);
} else {
    displayRandomQuote();
}
