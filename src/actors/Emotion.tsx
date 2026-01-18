export enum Emotion {
    neutral = 'neutral',
    approval = 'approval', // admiration, amusement
    anger = 'anger',
    confusion = 'confusion',
    desire = 'desire',
    disappointment = 'disappointment', // annoyance, disapproval
    disgust = 'disgust',
    embarrassment = 'embarrassment',
    ecstasy = 'ecstasy',
    fear = 'fear', // surprised (unpleasant)
    grief = 'grief',
    guilt = 'guilt', // remorse
    intrigue = 'intrigue', // curiosity
    joy = 'joy',
    kindness = 'kindness', // caring, gratitude
    love = 'love',
    nervousness = 'nervousness',
    pride = 'pride',
    sadness = 'sadness',
    wonder = 'wonder', // realization, optimism, excitement, surprised (pleasant)
}

// Map these emotions to base emotions
// wry humor = 

export const EMOTION_SYNONYMS: {[key in Emotion]: string[]} = {
    neutral: ['calm', 'placid', 'serene', 'tranquil', 'stoic', 'neutrality', 'composed', 'composure', 'unemotional', 'impassive', 'impassivity'],
    approval: ['content', 'amusement', 'pleased', 'appreciative', 'appreciation', 'satisfaction', 'satisfied', 'enjoyment', 'enjoying', 'content', 
        'contentedness', 'contentment', 'cheerfulness', 'cheerful'],
    anger: ['angry', 'furious', 'fury', 'enraged', 'livid', 'wrath', 'wrathful', 'frustration', 'ire', 'rage'],
    confusion: ['confused', 'puzzled', 'baffled', 'stunned', 'confounded', 'perplexed', 'bewilderment', 'perplexity'],
    desire: ['seductive', 'sexy', 'desirous', 'longing', 'lust', 'yearning', 'passion', 'passionate'],
    disappointment: ['annoyed', 'disapproval', 'dismayed', 'suspicious', 'suspicion', 'distrust', 'resentment', 'defensiveness', 'mockery', 'mocking', 'skepticism', 'disbelief'],
    disgust: ['disgusted', 'grossed_out', 'sickened', 'grossed out', 'sick', 'revulsion', 'disdain', 'contempt', 'rivulsion'],
    embarrassment: ['embarrassed', 'shame', 'ashamed', 'sheepish', 'chagrin', 'mortification', 'abashment', 'selfconsciousness', 'self-consciousness', 'shy', 'shyness', 
        'bashfulness', 'bashful', 'flustered', 'fluster', 'awkwardness', 'awkward'],
    ecstasy: ['ecstasy', 'ecstatic', 'orgasm', 'orgasmic', 'finishing', 'coming', 'euphoria', 'euphoric', 'mania', 'manic'],
    fear: ['shocked', 'terrified', 'terror', 'panic', 'alarm', 'alarmed', 'frightened', 'horror', 'horrified', 'shock'],
    grief: ['sad', 'upset', 'depressed', 'depression', 'sobbing', 'desperation', 'sorrow', 'despair'],
    guilt: ['remorseful', 'remorse', 'repentant', 'regretful', 'regretting', 'guiltridden', 'penitent', 'penitence', 'concern'],
    intrigue: ['intrigued', 'curious', 'curiosity', 'interest', 'absorbed', 'absorbing', 'engrossed', 'engrossing', 'mischief', 'mischievous', 'mischievousness'],
    joy: ['happy', 'happiness', 'joyfulness', 'thrilled', 'delighted', 'elated', 'jubilant', 'elation', 'humor', 'playfulness', 'playful', 'fun', 'delight', 'enthusiasm', 'pleasure',
        'cheer', 'cheery', 'jovial', 'joviality', 'wry humor', 'wry', 'humor', 'humorous', 'glee', 'gleeful'],
    kindness: ['grateful', 'caring', 'thankful', 'sweet', 'affectionate', 'tenderness', 'care', 'fondness', 'warmth', 'trust', 'compassion', 'compassionate', 'encouragement', 'encouraging'],
    love: ['lovestruck', 'adoration', 'adoring', 'devotion', 'devoted', 'infatuated', 'infatuation', 'romantic', 'romance'],
    nervousness: ['anxious', 'uncertain', 'jittery', 'uneasy', 'unease', 'worry', 'worrying', 'vulnerability', 'vulnerable', 'hesitance', 'anxiety', 'caution', 'apprehension'],
    pride: ['proud', 'pridefulness', 'challenge', 'arrogance', 'arrogant', 'self-confidence', 'triumph', 'triumphant', 'confidence', 'confident', 'ego', 'egotism', 
        'egotistical', 'smug', 'smugness', 'determination', 'determined'],
    sadness: ['sad', 'upset', 'distress', 'sorrow', 'unhappiness', 'melancholy', 'gloom', 'dejection'],
    wonder: ['excited', 'optimistic', 'surprised', 'realization', 'excitement', 'relief', 'hope', 'fascinated', 'fascination', 'awe', 'awe-struck',
        'amazement', 'amazed', 'inspired', 'inspiration', 'anticipation', 'admiration', 'reverence'],
}

// Mapping from synonym to Emotion, built from EMOTION_SYNONYMS
export const EMOTION_MAPPING: {[key: string]: Emotion} = Object.entries(EMOTION_SYNONYMS).reduce((acc, [emotion, synonyms]) => {
    synonyms.forEach((synonym) => {
        acc[synonym] = emotion as Emotion;
    });
    return acc;
}, {} as {[key: string]: Emotion});

// Give this character [an emotional expression, gesture, or pose]
export const EMOTION_PROMPTS: {[emotion in Emotion]?: string} = {
    neutral: 'a typical, neutral expression and pose',
    approval: 'an approving, pleased expression or gesture',
    anger: 'an angry expression and hostile gesture or pose',
    confusion: 'a stunned, confused expression and uncertain gesture or pose',
    desire: 'a flushed, seductive, or lustful expression and sexy or evocative pose',
    disappointment: 'an unhappy, annoyed expression and deflated pose',
    disgust: 'a disgusted, grossed-out expression and repulsed gesture or pose',
    embarrassment: 'an embarrassed expression and awkward gesture or pose',
    ecstasy: 'a flushed, euphoric expression and orgasmic, lusty pose',
    fear: 'a shocked, terrified expression and defensive or cowering pose',
    grief: 'a depressed, sobbing expression and mournful pose',
    guilt: 'a remorseful, apologetic expression and diminished, contrite pose',
    intrigue: 'a curious, intrigued expression and attentive pose',
    joy: 'a happy, smiling expression and joyful, playful gesture or pose',
    kindness: 'a kind, grateful expression and caring gesture or pose',
    love: 'an adoring, lovestruck expression and affectionate gesture or pose',
    nervousness: 'an anxious, uncertain expression and uneasy gesture or pose',
    pride: 'a proud expression and confident, triumphant pose',
    sadness: 'a sad, upset expression and dejected pose',
    wonder: 'an inspired, wondrous expression and amazed or excited gesture or pose',
}

export type EmotionPack = {[key: string]: string};
