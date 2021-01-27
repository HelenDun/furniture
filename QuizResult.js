import React from 'react';
import { styles } from './Styles.js';
import { Text, View, TouchableOpacity } from 'react-native';

export class QuizResultScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style: Math.floor(this.props.route.params.points / 10 - 1),
            styles: [
                // Scaled-Back
                'Scandinavian',
                'Minimalist',
                'Zen',
                'Contemporary',
                'Industrial',
                'Mid-Century Modern',
                // Ornate
                'Seventies',
                'Bohemian',
                'Modern Glam',
                'Totally Eighties',
                'Rustic',
                'Traditional'
            ],
            style_summaries: [
                // Scaled-Back
                '\tHello, Sunshine. You\'re the nature lover of the minimalist bunch and oh so happy! You celebrate tthe sun and throw your windows open at every chance to bring in the light. You forgo too many accessories because you want it to feel open and fresh and you\'re not home much anyways, always enjoying the outdoors while the weather is nice and keeping active during cold months to stave off winter blues.\n\tScandinavian style celebrates minimalist decor and functional furnishings with a lot of whites, hits of black, wood tones, and a few pops of color to keep things happy and a touch quirky.',
                '\tHoarders may think you\'re uptight and OCD, but you might be the most free of all your friends. Who needs things? They only get in the way of the life you want to lead. Anything you do bring home involves major consideration. After all, this will take up space. So you tend to collect just the attractive versions of the stuff you need, displayed in a simple, organized way.\n\tMinimalist design is stark, clean, and modern- nothing further can be removed to enhance the design, and the spirit of the materials speaks loudly. Great things were born out of minimalism, such as the walls coming down between living rooms and kitchens to create lush, open spaces and furniture that looks like modern art.',
                '\tYou believe in "flow," and whether you realize it or not, you\'re always seeming to unlock the chi in your rooms: lighting candles or folding your throw so that it lines up perfectly with the sofa. Your home is your haven, so just stick with honest, pure basics. Zen is an Eastern approach to decorating (or "undecorating") that focuses on the warmth of materials in a minimalist style. These rooms achieve balance, harmony, and relaxation by softening the starkness of minimalism with natural materials, wood accents and sculptural greenery.',
                '\tYou have little use for the past. Instead, you live in the here and now and look to the future. But that doesn\'t mean you\re changing your style every five minutes. You know what you like and you stick with it: quiet nights in, clutter-free bookshelves, casual rooms.\n\tMy theory is that any current style that doesn\'t reference the past is Contemporary, but conventionally, this style is sleek and casual, with nothing that feels too over the top. Skip anything too decorative and feminine. But most of all, free yourself of any clutter.',
                '\tYou\'re the tinkerer and enjoy a good DIY, a bit unrefined with that whole nerd-cool thing going on, never getting enough of craft beers, built-from-scratch bikes, and record players. You love design in its raw state with its interior still visible so you can figure out how it works. Your dream home would be an abandoned factory loft in Brooklyn with exposed plumbing that matches your shiny Edison lightbulbs haning from simple plug-in cords. You find yourself collecting lots of metals and woods but never anything too refined or polished.\n\tIndustrial style is a more masculine look that has made a huge comeback in the last ten years. Factory carts, typewriter tables, anything that was once utilitarian has become popular furniture in modern homes. Raw and rough surfaces look unintentionally unfinished. Old materials are transformed into tables or shelving units. Architectural elements thoughout the space stay in view, which can help keep design costs lower.',
                '\tThere\'s nothing extraneous or frilly about your style- everything you wear is impeccable, iconic, and always perfectly put together. You know the power of a slim suit or a simple, elegant shift dress, accessorized with a statement necklace and simple heels. You enjoy dressing up for dinner and might even indulge in a manhattan while cooling (I mean, I do anyway). To you, good design is everything and the death of Steve Jobs was a huge loss. The way he stripped technology down to its most functional state in beautiful, simple designs is total genius. Still reminiscing over that season finale of Mad Men? Lucky you; now you can bring the spirit of Don Draper into your home.\n\tMid-Century Modern is all about masculine, sleek, and sexy shapes with a strong retro vibe. The style emerged in the 1950s and \'60s as a strong rejection of traditionalism\'s ornamental design and the aristocratic attitude that ruled before World War 2. After the war people were optimistic and wanted a change, amd so modern furniture and architecture became more democratic with pieces scaled back to their most functional, sculptural, and ergonomic shapes. Furniture became lighter with slimmer legs and more versatile so folks could live simple and rearrange at will. Geometric, bold patterns and neutrals with pops of bright color graced the rooms.',
                // Ornate
                '\tAs a flower child, you can\'t help expressing yourself- whether through art, music or close conversation. Being touchy-feely etends to your home, too: you love the indulgence of fur (just make it faux), a shaggy rug, or a super loungy sofa.\n\tIndeed, Tom Wolfe coined the term "the me decade" to describe the seventies, when folks were disillusioned with the Vietnam War, and turned their attention to themselves and their families. Nature-inspired neutrals mixed with bright Technicolor splashes as patterns became zanier than ever: you basically want to ogle everything in the room.',
                '\tYou leave no room for fuss or rules. Why? You\'re simply too busy to be layering your textiles and making sweet love to your Moroccan poufs. You consider yourself a creative type- an artist or writer (by profession or just in practice) and your look is usually flowy and easy, layered and casual, with global vibe.\n\tBecause Bohemians have a hard time curtailing their hobbies, multipurpose decor is a must. Want to meditate? Here\'s an oversized pillow. Taking a walk? Grab the sarong on the sofa. When guests pop by, floor pillows, ottomans and occasional tables come to the rescue.',
                '\tWelcome to Hollywood. To you, all the world\'s a stage and we are simply your audience (and hopefully your guests). If someone calls you a drama queen, you take it as a compliment because you are theatrical, glam, and larger than life- and so your home should be, too. You can\'t stay away from luxurious throws, bold colors, and ornate patterns, and if given the chance, you would cover your walls in a red lacquer that matches your lipstick. So what are you waiting for?\n\tModern Glam morphed from Hollywood Regency, which was born of 1930s movie sets that had to be loud enough to look luxurious in black and white. Thanks to the fabulous starlets who brought home the decorating inspiration, the trend spread quickly. Rich and  luxe, overexaggerated, heavy, and saturated are key to this style. The focus is on feminine curves, metallics, luxe finishes, and generally just bling anywhere and everywhere.',
                '\tYou\'re all about having fun and dancing in the streets- you only live once, after all. You take risks and flock to eccentric shapes and crazy color combos- it wouldn\'t be unlike you to set a vintage beanbag chair under your Warhol print. As Andrew in The Breakfast Club reminds is, "We\'re all pretty bizzare. Some of us are just better at hiding it, that\'s all."\n\tWhile eighties interior design is remembered for so many tacky details (an overkill of mauve and chintz), it also had some fun moments and art deco influences that can look youthful, vibrant and a little out of control- in a good way.',
                '\tLife is simple, and you wouldn\'t want it any other way. For a natural homebody like you, nothing beats a long hike in the woods followed by a dinner at your reclaimed table with veggies plucked straight from the garden. Country style is set up to feel like a home away from home: always cozy, laid back, warm, lived in, and comfortable. Casual patterns like stripes, plaids, checks, and floral are all common in these spaces. It\'s like the house that Ryan Gosling\'s character built for Rachel McAdam\'s character in The Notebook: chock-full of romance.',
                '\tYou\'re like the oldest sibling of all the personalities- dependable and an upholder of traditions. You often reminisce about the past- the ways things used  to look. The chaos of the modern world makes  you crazy; instead you long for black-and-white movies, old hardbound books, rooms softly lit by candlelight.\n\tA Traditional house is warm and inviting. with an air of sophistication. the set of Downtown Abbey is a (very luxe) version of what this style used to be, but the house in It\'s Complicated is a modern interpretation called New Traditional.'
            ],
            style_notes: [
                // Scaled-Back
                'Look on the Light Side;Light woods like maple, birch, and oak;Plastic modern chairs;Clean lines;Natural or whitewashed floors;Hits of black;Bright, warm color accents;Wintry comforts (candles and faux fur)',
                'Less is Always More;White surfaces;Chrome accessories;Streamlined platform beds;Modern paneled storage;Spare floating shelves;Minimal sculptures;Sleek furniture with simple legs;Multifunctional pieces',
                'Namaste, My Friend;Tonal or monochromatic color palettes;Diffused light, such as from paper lanterns;Essential-oil burners and natural scents;Solid-bedding, rugs, and curtains;Natural materials, like sustainable woods and linen;Contrasting textures, like a woven basket on a smooth side table;Simple furniture with little to no ornamentation;Indoor plants like terrariums',
                'Back to Basics;Neutral, masculine color palettes;Color blocking in the accents;Oversized artwork;Low, simple sofas;Glass tables;Smart, hidden storage (behind walls or in furniture);Arc lamps;Chrome or nickel finishes',
                'What\'s Happening, Hipster?;DIY pipe shelving;Chalkboard paint;Steel kitchen islands;Subway tile;Simple pendants with exposed bulbs;Rusted architectural wall hangings;Metal chairs',
                'Shaken, Not Stirred;Tulip or Eames-style molded plastic chairs;Warm wood finished, like rosewood or teak; Geometric patterns;Long, streamlined sofas;Low, long dressers or credenzas;Bar carts;Furniture with tapered legs;Chrome and brass accents',
                // Ornate
                'Chill Out, Man;Groovy wave or floral prints;Earth tones with a dash of red, turquoise, or goldenrod;L-shaped sectionals to create conversation pits;Lots of texture: shag, faux fur, felt, macrame;Teakwood;Curvy chairs like the iconic Egg Chair;Hanging plants and terrariums',
                'Off the Beaten Path;Worns rugs and upholstery;Intricate global patterns;Handmade tribal accents;Indoor hammocks;Distressed furniture;Hand-dyed linens and fabrics;Strong, saturated colorso n furniture and textiles;Patterned dhurrie poufs;Tropical indoor plants',
                'Life is a Cabaret;Lacquer walls;Plenty of bling from chrome or brass;Really big statement mirrors;Luxe fabrics like satin, velvet, and fur;Bright graphic wallpapers;Asian details and motifs like chinoiserie and bamboo;Chandeliers dripping with crystals and brass;Velvet ornate furniture;High-contrast color palette with lots of jewel-tone accents',
                'Just Another Manic Decade;Neon lighting in any color;Glass and brass dining tables or coffee tables;Colorful pop art;Mirrored furniture;Geometric patterns with an art deco bent- a scallop or triangle;Round-arm upholstered furniture;Pastel colors- they are back, folks;Luxe fabrics like patent leather and plush velvet',
                'Relax, You\'re on Vacation in Big Sur;Furniture with an aged and beautiful patina;Red- or blue-stripe pillows (especially ticking stripe);Cotten or linen slipcovers;Sofas with deep seats and padded arms for afternoon naps;Washed linens;Wildflowers cut and arranged in an ironstone pitcher;Cast-iron or copper accents;Pretty, old jardbound books;Rustic wood floors',
                'As It Always Was;Persian rugs;Wingback chairs;Crystal chandeliers;Antique tea sets;Classic patterns like damask, chinoiserie, or matelasse;Tufted headboards;Gilded accents;Alabaster lamps and marble busts;Oil portraits or landscapes'
            ],
            quiz1: 'QuizScaledBack',
            quiz2: 'QuizOrnate'
        }
    }

    _continueButton() {
        // if the user got to this page from the ornate quiz
        if (this.state.style < 6) {
            return (
                <TouchableOpacity
                    onPress = {() => this.props.navigation.navigate(quiz2)}
                >
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Take the Ornate Style Quiz</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        // else keep the continue buttons disabled and faded
        return (
            <TouchableOpacity
                onPress = {() => this.props.navigation.navigate(quiz1)}
            >
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Take the Scaled-Back Style Quiz</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _complementary() {
        let scaledback = this.state.style < 6;
        return 6 * (scaledback) + -6 * (!scaledback) + this.state.style
    }

    _graph() {
        return (
            <View>

            </View>
        )
    }

    render() {
        return (
            <View style={styles.page}>
                <Text style={styles.title}>Quiz Result</Text>
                <Text style={styles.header}>Style: {this.state.styles[this.state.style]}</Text>
                <Text style={styles.header}>Complementary Style: {this.state.styles[this._complementary()]}</Text>
                {this._graph()}
                <Text style={styles.text}>{this.state.style_summaries[this.state.style]}</Text>
                <Text style={styles.text}>{this.state.style_notes[this.state.style]}</Text>
                <View style={styles.options}>
                    <TouchableOpacity
                        onPress = {() => this.props.navigation.navigate('Home')}
                    >
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Back to Main Menu</Text>
                        </View>
                    </TouchableOpacity>
                    {this._continueButton()}
                </View>
            </View>
        );
    }
}
