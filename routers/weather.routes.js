import { addCitysWeatherController, getCitysWeatherController,
    updateCitysWeatherController, deleteCitysWeatherController,
    getCitysWeatherInOneDayController
} from "../controllers/index.js";
import { validateWeatherData } from "../middleware/validate.js";

import { Router } from "express";

const router = Router()

router.get('/weather/:name', getCitysWeatherController)                   // done                 // /weather/fargona?page=1&limit=5      ni ishlatishni maslahat beraman
router.get('/weather/:name/:date', getCitysWeatherInOneDayController)     // done
router.post('/weather', validateWeatherData, addCitysWeatherController)   // done
router.put('/weather/:name/:date', updateCitysWeatherController)          // done
router.delete('/weather/:name/:date', deleteCitysWeatherController)       // done

export default router