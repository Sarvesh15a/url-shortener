import express from 'express';
import User from '../models/user.model.js';
import ShortId from 'shortid';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const ShUrl = process.env.SHORT_URL || "http://localhost:5500";

function isValidUrl(url) {
    // Regular expression for a valid URL
    const urlRegex = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;

    // Test if the given string matches the regular expression
    return urlRegex.test(url);
}

router.post('/api/V8/urlshortner', async (req, res) => {
    const { longURL } = req.body;

    if (!isValidUrl(longURL)) {
        return res.status(400).json({ message: "Invalid URL" });
    }

    try {
        let url = await User.findOne({ longURL: longURL });

        if (url) {
            return res.status(200).json({ url: url });
        }

        const shortid = ShortId.generate();

        let shorturl = await User.findOne({ shortURL: `${ShUrl}/${shortid}` });

        if (shorturl) {
            return res.status(400).json({ message: "Technical Error. Try Again" });
        }

        const shortUrl = new User({
            longURL: longURL,
            shortURL: `${ShUrl}/${shortid}`
        });

        await shortUrl.save();

        return res.status(200).json({ url: shortUrl });
    } catch (e) {
        return res.status(400).json({ message: e.message });
    }
});

router.get('/shortURL', async (req, res) => {
    const shortURL = req.params.shortURL;

    try {
        const url = await URL.findOne({ shortURL: `${ShUrl}/${shortURL}` });

        if (!url) {
            return res.status(404).json({ message: "Not Found" });
        }

        return res.redirect(url.longURL);
    } catch (err) {
        return res.status(500).json({ message: "Internal Error" });
    }
});

export default router;
