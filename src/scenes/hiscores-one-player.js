const _ = require('lodash');
const Screen = require('../screen');
const Format = require('../format');

const CYCLE = true;

const DEFAULT_SCORES = [
    {player: 'MPAQUE', time: 99840},
    {player: 'JSMADJA', time: 99830},
    {player: 'DATTALI', time: 99550},
    {player: 'PTIRMAN', time: 99450},
    {player: 'ABEAUCHA', time: 99240},
    {player: 'CNGUYEN', time: 99340},
    {player: 'JJOUANNE', time: 99090},
    {player: 'FDESROUS', time: 99370},
    {player: 'KKERNINO', time: 99290},
    {player: 'MTRACCO', time: 99730},
];

class SceneScoresOnePlayer extends Phaser.Scene {

    constructor() {
        super({key: 'sceneScoresOnePlayer'});
        this.scores = localStorage.getItem('1P_scores') || DEFAULT_SCORES;
    }

    preload() {
        this.load.image('bg', 'assets/backgrounds/BG.png');
        this.load.image('score_line', 'assets/elements/SCORE_LINE.png');
    }

    create() {
        this.bg = this.add.image(0, 0, 'bg').setOrigin(0);
        this.bg.setScale(Screen.ZOOM, Screen.ZOOM);
        this.bg.setZ(-1);

        const titleValue = '         SCORE RANKING 1P         ';
        this.title = this.add.text(0, 25, titleValue, {font: `${Screen.FONT_SIZE}px Impact`});
        this.title
            .setBackgroundColor('#ee4239')
            .setFontStyle('italic')
            .setDisplaySize(Screen.WIDTH, Screen.FONT_SIZE);

        this.addScoreLines();
        const scores = this.computeScores();
        this.addRanks(scores);
        this.addPlayers(scores);
        this.addScores(scores);

        if (CYCLE) {
            this.time.delayedCall(5000, () => this.scene.start('sceneScoresTwoPlayers'), [], this);
        }
    }

    addScores(scores) {
        const scoreValues = scores.map((score, i) => {
            const x = -Screen.WIDTH;
            const y = 100 + (Screen.FONT_SIZE * i * 1.5);
            return this.add.text(x, y, `${score.score}`)
                .setFontSize(Screen.FONT_SIZE)
                .setFontFamily('Impact')
                .setStroke('#2a366b', 4);
        });
        this.tweens.add({
            targets: scoreValues,
            x: 500,
            duration: 1500,
            ease: 'Power3',
            delay: i => i * 100
        });
    }

    addPlayers(scores) {
        const players = scores.map((score, i) => {
            const x = -Screen.WIDTH;
            const y = 100 + (Screen.FONT_SIZE * i * 1.5);
            return this.add.text(x, y, `${score.player}`)
                .setFontSize(Screen.FONT_SIZE)
                .setFontFamily('Impact')
                .setStroke('#2a366b', 4);
        });
        this.tweens.add({
            targets: players,
            x: 200,
            duration: 1500,
            ease: 'Power3',
            delay: i => i * 100
        });
    }

    addRanks(scores) {
        const ranks = scores.map((score, i) => {
            const x = -Screen.WIDTH;
            const y = 100 + (Screen.FONT_SIZE * i * 1.5);
            return this.add.text(x, y, `${score.rank}.`)
                .setFontSize(Screen.FONT_SIZE)
                .setFontFamily('Impact')
                .setStroke('#2a366b', 4);
        });
        this.tweens.add({
            targets: ranks,
            x: 70,
            duration: 1500,
            ease: 'Power3',
            delay: i => i * 100
        });
    }

    computeScores() {
        return _(this.scores)
            .orderBy(score => score.time)
            .take(5)
            .map((score, i) => {
                const rank = Format.formatRank(i + 1);
                const player = score.player;
                const time = Format.formatTime(score.time);
                return {rank, player, score: time};
            })
            .value();
    }

    addScoreLines() {
        const scoreLines = [];
        for (let i = 0; i < 5; i++) {
            scoreLines.push(this.add.image(Screen.WIDTH, 125 + (i * Screen.FONT_SIZE * 1.5), 'score_line')
                .setOrigin(0)
                .setScale(Screen.ZOOM));
        }
        this.tweens.add({
            targets: scoreLines,
            x: 70,
            duration: 1500,
            ease: 'Power3',
            delay: i => i * 100
        });
    }

}

module.exports = SceneScoresOnePlayer;