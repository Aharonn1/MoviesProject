-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 03, 2023 at 07:06 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cinema`
--

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `blogId` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `title` varchar(200) NOT NULL,
  `story` mediumtext NOT NULL,
  `video` varchar(50) NOT NULL,
  `imageName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`blogId`, `name`, `title`, `story`, `video`, `imageName`) VALUES
(3, 'באטמן החדש שהולך להג', 'אי אפשר להתעלם מזה שאחד מהסרטים המצופים ביותר השנה מוקרן ממש עכשיו בקולנוע, באטמן החדש של מאט ריבס (שעומד מאחורי הלהיטים: כוכב הקופים: השחר, קלוברפילד) ולפי הטריילרים ששוחררו אלינו הוא נראה מאוד אפל.', 'אי אפשר להתעלם מזה שאחד מהסרטים המצופים ביותר השנה מוקרן ממש עכשיו בקולנוע, באטמן החדש של מאט ריבס (שעומד מאחורי הלהיטים: כוכב הקופים: השחר, קלוברפילד) ולפי הטריילרים ששוחררו אלינו הוא נראה מאוד אפל.\n\nהסרט החדש יעקוב אחרי ברוס ווין המיליארדר היתום מהעיר גות\'האם, בשנותיו הראשונות (אם לדייק לפי הדיווחים שנתו השנייה) בתור באטמן, לוחם הצדק שלוקח את החוק לידיים. בעודו נלחם בשחיתות בעיר שמתגלה כי קשורה לעבר משפחתו של ברוס, רוצח סדרתי בשם (רידלר) פותח חזית איש העטלף. \n\nהסרט קיבל דירוג צנזורה שהרים גבה אצל המעריצים, הדירוג שקיבל הסרט \nהוא \"PG-13\". הסרט קיבל את הדירוג הזה בגלל שיש בו: אלימות, תוכן שיכול להיות מטריד, שימוש בסמים, שפה בוטה וחומר מיני מרומז. \nמעריצים רבים ציפו לדירוג \"R\" (למבוגרים בלבד) כפי שקיבל הג\'וקר שיצא 2019, מאחר שהיו שמועות רבות שהסרטים יהיו קשורים זה בזה. האם הם באמת יהיו קשורים? עדין לא יודע. אבל אין ספק שדירוג נמוך יותר של צנזורה יכול להראות שדווקא לא יהיה קשר. \n\nאבל לא באנו להוריד, ה-PG-13 לא צריך להדאיג אתכם יותר מדי, גם \"האביר האפל\" גרסאת הבאטמן הקודמת של כריסטופר נולאן מ-2006, בכיכובו של כריסטיאן בייל כבאטמן והית\' לאדג\'ר בתפקיד בלתי נשכח כג\'וקר, שהיה אחד הסרטים האפלים קיבל את אותו דירוג, וגם אם אנחנו בענייני נוסטלגיה \"באטמן חוזר\" בכיכובו של מייקל קיטון משנת 1992 שכלל סצנות קשות ואלימות שכללו את זריקה של סלינה (אשת החתול) כמה פעמים מחלון, ובאטמן שמפוצץ ביריון על ידי דינמיט וגם הסרט הזה קיבל את אותו דירוג. \n\nאגב מייקל קיטון בתור באטמן, חדי העין יכלו לזהות את התחפושת העטלף של מייקל קיטון בטיזר טריילר של פלאש שיצא באירוע המעריצים וחשף קטעים מתוך הסרט של הפלאש, אם לא יצא לכם לראות את זה אתם יותר ממוזמנים להשלים את זה הצפייה ממש פה:', 'https://youtu.be/BCfH9GQPLiw', 'd5beac52-e616-42b8-b13f-4eecb42a04e2.jpg'),
(4, 'הסרט הרביעי והאחרון ', 'הסרט הרביעי והאחרון של הסדרה הלוהטת \"אחרי ש...\" מגיע לקולנוע השבוע!\nלכבוד הסיום הרותח הכנו לכם כמה FUN FACTS על סדרת הסרטים', 'הסרט הרביעי והאחרון של הסדרה הלוהטת \"אחרי ש...\" מגיע לקולנוע השבוע! לכבוד הסיום הרותח הכנו לכם כמה FUN FACTS על סדרת הסרטים  1.   בהתחלה, שחקנית אחרת בשם \"ג\'וליה גולדני\" לוהקה לתפקיד של טסה ורק שבועיים לפני שהצילומים החלו, ג\'וזפין לנגפורד הצטרפה לקאסט. 2.     הרומן הרותח נכתב בהתחלה ב- wattpad וקראו אותו כמעט 2 ב-י-ל-י-ו-ן קוראים!!! 3.     הירו פיינס טיפין שמשחק את הרדין לא קרא אף אחד מהספרים של After, אבל ג\'וזפין לנגפורד שמשחקת את טסה כן קראה אותם לפני. 4.     הסרט השלישי \"אחרי שהתנגשנו\" והסרט הרביעי \"אחרי שהגענו לסוף הטוב\" צולמו באותו הזמן. 5.     העלילה המקורית שכתבה אנה טוד הייתה פאנפיקשן על הלהקה המצליחה וואן דיירקשן. הדמויות המרכזיות היו טסה והארי סטיילס, ולפני שהסרטים פורסמו בגלל סיבות משפטיות, שמה של הדמות המרכזית הגברית שונתה להרדין.', 'https://youtu.be/nLi2KP6Fg2U', '126fe8ca-1257-40d8-a202-0b259a9634b4.jpg'),
(5, 'החלטנו לעלות לכם טעימה מעולם הסרטים', 'ברוכים הבאים לבלוג הראשון בסדרת \"דברים שלא ידעתם על עולם הקולנוע\" והפעם-אנצרטד', 'החלטנו לעלות לכם טעימות מהסרטים החדשים וגם קצת לנסות לחדש לכם על סרטים ישנים. \n\nנכון אנחנו יודעים שלא כולם עפים על הליהוק של טום הולנד בתור צייד האוצרות בעל העבר המסתורי והמפוקפק, נייתן דרייק. אבל אחרי \"ספיידרמן אין דרך הביתה\" אנחנו לא יכולים להפסיק לרצות ממנו עוד.\n\nהסרט אנצ\'רטד, מבוסס על סדרת המשחקים שהופקה באולפן נוטי דוג (Naughty dog) שהוציאה גם את משחק ההשרדות אחד הגדולים שיצאו אי פעם \"The Last Of Us\"  (\"האחרון מאיתנו\" בתרגום שלא עושה חסד, שלפי השמועות רוקם עור וגידים ויהפוך לסדרת לייב אקשן). \n\nהמשחקים עוקבים אחרי נייתן דרייק במסע למציאת אוצרות חבויים. המשחק הראשון שיצא ב- 2007 תחת השם : \"Uncharted: Drake\'s Fortune\" שמתרחש בפנמה ביערות הגשם של האמזונס ובאי שלא מצויין במפות ולא חקרו מעולם (Uncharted) לחופי דרום אמריקה. אל נייתן מצטרפים אלינה פישר העיתונאית וויקטור סאליבן המנטור של נייתן, במסע למציאת האוצר של אל דורדו. \n\nהמשחק בעל הצלחה הגדולה מאוד! זכה לעוד שלושה משחקים בסדרה שאחרון יצא בשנת 2016 תחת השם – \"Uncharted 4: A Thief\'s End\" ויש לנו חדשות טובות אם עוד לא שמעתם עד עכשיו, משחק חדש בסדרה הולך לצאת והוא הולך להיות ב PS5 –  מותאם לגרפיקה שקונסולת הדור החדש יודעת להציע. \n\nסרט ההרפתקאות החדש שהולך להגיע לקולנוע ב-17/2 בויים על ידי רובן פליישר שאחראי על כמה מהלהיטים הגדולים \"ונום\", \"זומבילנד\" ו\"זומבילנד ירייה כפולה\" ככה שאקשן לא זר לו. \n\nעם קאסט שחקנים מרשים שכולל גם את אנטוניו ברדנס בתור הנבל של הסרט שזהותו נשמרת בסוד, האם זה הולך להיות דמות המשחקים ככה השמועות אבל עדין לא ידוע. סופיה עלי ששיחקה ב\"אמת וחובה\" ומשחקת את קלואי פרייזר, ציידת אוצרות שחובבי המשחק יזהו מתוך המשחק השני \"Uncharted 2: Among Thieved\" ובמשחק הספין אוף שהגיע אחרי \"Uncahrted: The Lost Legacy\" במשחק (אזהרת ספויילר אפשרית!) אנחנו מגלים שקלואי ונייתן חולקים עבר רומנטי, האם הסרט יראה לנו את זה? אולי. חדי העין בוודאי זיהו כי דמותה של העיתונאית אלנה פיישר שהיא מושא אהבתו של נייתן, לא נכללת ברשימת הדמויות. האם הסרט הולך בדרך של סרט אחר של הולנד, \"ספיידרמן: השיבה הביתה\", שגילנו את מי זאת מרי ג\'יין רק בסוף הסרט. הגיוני להתחשב בעובדה שקלואי חולקת עבר רומנטי במשחק עם נייתן, ובסרט אנחנו פוגשים את נייתן', 'https://youtu.be/Zb7iFCTcc4I', '8deaaf24-7106-432c-bb55-f75123419f66.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `buy`
--

CREATE TABLE `buy` (
  `buyId` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `body` varchar(50) NOT NULL,
  `food` varchar(50) NOT NULL,
  `drink` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `buyCount` int(10) NOT NULL,
  `priceCount` int(11) NOT NULL,
  `imageName` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `buy`
--

INSERT INTO `buy` (`buyId`, `title`, `body`, `food`, `drink`, `price`, `buyCount`, `priceCount`, `imageName`) VALUES
(15, 'קולנוע רגיל ', 'ברוכים הבאים לקולנוע', 'אוכל: לא כולל', 'שתיה: לא כולל', 40, 0, 40, '4393a6f3-a6e9-4e54-b178-0636d01d365a.jpg'),
(16, 'VIP  קולנוע ', 'ברוכים הבאים לקולנוע ', 'אוכל: נאפיס,פופקורן,פיצה', 'שתיה: קולה,פאנטה,מים', 80, 0, 80, 'cd533021-d41f-4dca-81fa-ce521d9cd3bb.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `chair`
--

CREATE TABLE `chair` (
  `chairId` int(11) NOT NULL,
  `chairNumber` int(11) NOT NULL,
  `chairCount` int(200) NOT NULL,
  `buyCount` int(200) NOT NULL,
  `imageName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chair`
--

INSERT INTO `chair` (`chairId`, `chairNumber`, `chairCount`, `buyCount`, `imageName`) VALUES
(1, 3, 1, 0, 'b8198243-17ca-4eba-9c09-deaa154cae65.jpg'),
(2, 4, 1, 0, 'c52795ac-1c79-40ef-bc9d-2d49bbf12e7c.jpg'),
(3, 5, 1, 0, '479250bb-b16f-484c-becc-7877fa3707ad.jpg'),
(4, 6, 1, 0, 'c2cd270a-ffc0-47ea-847a-829077f2a7c0.jpg'),
(5, 7, 1, 0, '72c6c8a6-7b9b-4285-bb51-a18b62a48d66.jpg'),
(6, 8, 1, 0, 'b3b374c2-5f6e-4f82-85b1-4ac0bc67ec3e.jpg'),
(7, 9, 1, 0, 'de1b1e74-2341-40d7-b9c3-317bcbdb4ac3.jpg'),
(8, 10, 1, 0, '9df22e52-a8e1-432b-97c6-b39ece4675b5.jpg'),
(9, 11, 1, 0, '93b86708-d3c4-4508-81b5-fcf9ae96fc52.jpg'),
(10, 12, 1, 0, 'b3b9abf6-5560-43d2-ab19-4cad314a2e18.jpg'),
(11, 13, 1, 0, '17c274d6-2c34-4c68-a991-4717e56264da.jpg'),
(12, 14, 1, 0, 'a324a5b9-90dc-4fe9-8efa-c19b09121fba.jpg'),
(13, 15, 1, 0, '148a899c-2de3-48f7-b57f-c117b27ad884.jpg'),
(14, 16, 1, 0, 'b970303b-7677-4c64-bc80-40e2833a9997.jpg'),
(15, 17, 1, 0, '8c385577-8c11-416c-9eb4-dd9f57195c6e.jpg'),
(16, 18, 1, 0, 'b6937fd5-ba80-49d0-9cd2-df4788014226.jpg'),
(17, 19, 1, 0, '1e4442e0-96f4-4e70-8816-45819d06501b.jpg'),
(18, 20, 1, 0, 'ab350483-5bab-4803-ad9e-8cdb7adf9b0c.jpg'),
(19, 21, 1, 0, '46718caa-322a-4b2b-bf6e-56dc336e6711.jpg'),
(20, 22, 1, 0, 'dfc00136-408c-43cd-a7a3-77e47ab1801c.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `genreId` int(11) NOT NULL,
  `genreName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `genre`
--

INSERT INTO `genre` (`genreId`, `genreName`) VALUES
(1, 'פעולה'),
(2, 'קומדיה'),
(3, 'דרמה'),
(4, 'פשע');

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `movieId` int(11) NOT NULL,
  `theaterId` int(11) NOT NULL,
  `genreId` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `time` varchar(10) NOT NULL,
  `length` int(11) NOT NULL,
  `date` varchar(20) NOT NULL,
  `video` varchar(200) NOT NULL,
  `summary` varchar(1000) NOT NULL,
  `imageName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`movieId`, `theaterId`, `genreId`, `name`, `time`, `length`, `date`, `video`, `summary`, `imageName`) VALUES
(30, 2, 1, 'מהיר ועצבני 10', '17:00', 124, '2023-12-03', 'https://youtu.be/eoOaKN4qCKw', '\"מהיר ועצבני 10\", הסרט העשירי בסדרת הסרטים \"מהיר ועצבני, משיק את אחד הפרקים האחרונים באחת מסדרות הסרטים הפופולריות והמצליחות ביותר שהופיעו בקולנוע, אשר כעת נכנסת לעשור השלישי שלה, ושומרת על אותו צוות ', 'a2d11e90-df71-494f-a2c5-63b00c372866.jpg'),
(34, 3, 4, 'בלתי נשכחים 3', '21:00', 117, '2023-12-03', 'https://youtu.be/4xD0junWlFc', 'הסרט מספר על עלילות חבורת שכירי חרב בהנהגת ברני רוס (סילבסטר סטאלון), יוצא הכוחות המיוחדים והאגף לפעולות מיוחדות. לאחר שרוס ואנשיו חילצו מן הכלא האפריקאי את חברם לצוות, ', '1cc93530-4f92-44cd-a774-c0fd7121e1e6.jpg'),
(35, 1, 1, 'ונום', '17:30', 125, '2023-12-04', 'https://youtu.be/u9Mv98Gr5pY', 'ונום 2 (באנגלית: Venom: Let There Be Carnage, בתרגום חופשי לעברית: ונום: יְהִי קֶטֶל) הוא סרט גיבורי-על אמריקאי בלייב אקשן המבוסס על דמות באותו השם, המשמש כאנטיתזה עבור גיבור-העל ספיידרמן.', 'f73e204d-bd25-42b8-867b-049985977b37.jpg'),
(36, 1, 2, 'גומאנגי', '19:20', 108, '2023-12-04', 'https://youtu.be/2QKg5SZ_35I', 'ג\'ומנג\'י (באנגלית: Jumanji) הוא סרט פנטזיה אמריקאי משנת 1995 שבמרכזו משחק לוח עתיק לילדים שגורם למשחקים בו להיות מעורבים באופן מוחשי בסכנות האורבות בג\'ונגל, ', 'e11a481d-ed8d-4c21-81dd-3b4aef9d15be.jpg'),
(37, 1, 4, 'באטמן', '15:45', 97, '2023-06-28', 'https://youtu.be/mqqft2x_Aa4', 'באטמן (באנגלית: Batman, בעברית: איש העטלף) הוא דמות בדיונית של גיבור-על של חברת DC קומיקס.', '877fcf69-8a2a-4788-841a-1fb48c169055.jpg'),
(46, 1, 1, 'סופרמן', '20:30', 116, '2023-06-28', 'https://youtu.be/T6DJcgm3wNY', 'סופרמן (מאנגלית: Superman; בתרגום חופשי: \"אדם-על\") הוא דמות בדיונית של גיבור-על, המופיעה בחוברות הקומיקס שהוציאה לאור חברת DC קומיקס.', '84e1348f-abd4-486e-909c-022f79737261.jpg'),
(51, 1, 1, 'המהפנט', '22:00', 121, '2023-06-28', 'https://youtu.be/qChLtYJLuw8', '\nהבלש דני רורק נחוש למצוא את בתו האובדת, אך במקום זאת הוא מוצא את עצמו מפותל בתוך חקירת מקרי שוד בנק יוצאי דופן, אשר יביאו אותו בסופו של דבר להטיל ספק בכולם ובהכל', 'f0f20573-9995-4346-81c0-0d037b8e1768.jpg'),
(56, 4, 2, 'נראה אותך שוטר', '19:30', 125, '', 'https://youtu.be/x5NFG-i_AjA', 'נראה אותך שוטר הוא סרט קומדיה- פשע אמריקאי משנת 2014 בכיכובם של ג\'ייק ג\'ונסון ודיימון ואינז ג\'וניור ובבימויו של לוק גרינפילד', 'b318f3c1-1b81-47e3-a473-3a7131013130.jpg'),
(57, 4, 2, 'נראה אותך אסיר', '20:30', 108, '', 'https://youtu.be/e-9THAog_qY', 'נראה אותך אסיר,Get Hard - כשג\'יימס, מיליונר המנהל קרנות גידור והשקעות, נתפס בהונאה ונשפט לתקופת מאסר בכלא, השופט מעניק לו 30 יום כדי להסדיר את ענייניו', '29ff53e2-b9fd-4a73-9288-32fbfa59dbd0.jpg'),
(58, 1, 2, 'בדרך לחתונה עוצרים בווגאס', '21:00', 124, '', 'https://youtu.be/9jIIldfGDmc', 'בדרך לחתונה עוצרים בווגאס הוא סרט קולנוע אמריקאי מסוגת קומדיה, אשר בוים על ידי טוד פיליפס ונכתב על ידי ג\'ון לוקאס וסקוט מור. הסרט יצא לאקרנים בארצות הברית ב-5 ביוני 2009', '4743280f-9d9f-436b-9d7b-23e98154cb11.jpg'),
(59, 4, 1, 'התחלה', '23:00', 117, '', 'https://youtu.be/IH-lZC3ioWQ', 'התחלה הוא מותחן מדע בדיוני אמריקאי-בריטי משנת 2010, שנכתב, הופק ובוים על ידי כריסטופר נולאן. בסרט מככבים השחקנים לאונרדו דיקפריו, קן ואטאנבה, ג\'וזף גורדון-לוויט, מריון קוטיאר, אליוט פייג\', קיליאן מרפי ומייקל קיין.', 'd2177818-c977-427b-b68a-971f99de393e.jpg'),
(60, 4, 1, 'אווטאר', '22:30', 115, '', 'https://youtu.be/ht8a4sX30GI', 'אווטאר (באנגלית: Avatar) הוא סרט מדע בדיוני אפי תלת-ממדי אמריקאי שיצא לאקרנים ב-18 בדצמבר 2009. את הסרט ביים ג\'יימס קמרון ומככבים בו סאם וורת\'ינגטון, זואי סלדנה, סיגורני ויבר, מישל רודריגז וג\'ובני ריביסי.', 'd7747004-cef0-4478-b791-bfcd8628ca0e.jpg'),
(61, 1, 2, 'טיפשים בלי הפסקה', '18:00', 127, '', 'https://youtu.be/seQYPGiUFEI', 'טיפשים בלי הפסקה 2 (באנגלית: Dumb and Dumber To) הוא סרט קומדיה אמריקאי משנת 2014 אותו ביימו האחים פארלי. זהו סרט המשך של \"טיפשים בלי הפסקה\"', 'dcba1281-391f-4d89-83a3-d71c7afff489.jpg'),
(62, 4, 2, 'בוראט', '21:30', 106, '', 'https://youtu.be/5rDqDy8gh8E', '\"בוראט 2\": לצחוק ולבכות בו בזמן. ההרפתקה הפרועה שבישל הפעם הקומיקאי היהודי בריטי סשה ברון כהן, היא סיכום נפלא ומחריד של השנה המטורפת שעברנו', '0e8f6c1e-0fb7-4b0e-963c-8c5072389aa0.jpg'),
(63, 1, 2, 'בתול בן 40', '19-30', 128, '', 'https://youtu.be/YnDeJn-BX5Q', 'בתול בן 40,40 Year Old Virgin - אנדי הוא גבר חביב בן ארבעים בעל עבודה קבועה בחנות אלקטרוניקה ואוסף של בובות גיבורי פעולה וחוברות קומיקס', '2a91e654-40de-4e0a-b64b-25b71ec0ec67.jpg'),
(64, 3, 2, 'אחים חורגים', '21:00', 113, '', 'https://youtu.be/CewglxElBK0', 'תקציר הסרט \"אחים חורגים\" ברנן האף (וויל פארל), בן ה- 39, גר עם אמו ומבלה את זמנו בראיונות עבודה ודייל דובאק (ג\'ון.ס. ריילי) מובטל כרוני בן 40 הגר עם אביו', 'f2aba100-3295-411f-ac16-5a89222f140f.jpg'),
(65, 4, 3, 'העיר הזאת', '20:00', 117, '', 'https://youtu.be/t3Wc-KYC9f8', '\r\nבעיר אפלה, בעולם דמיוני, הבלש ג׳ו נקרא לעזרתה של שרה בנט בחקירת רצח אחותה. מהר מאוד העלילה מסתבכת וג׳ו מוצא את עצמו עומד מול הפושע הגדול של העיר הזאת', 'bbfb6a46-b816-4739-8f3d-365bb14759fd.jpg'),
(66, 4, 3, 'חף מפשע', '20:30', 119, '', 'https://youtu.be/lEvN65jHlrw', 'חף מפשע | The Innocent מועמד ל-11 פרסי סזאר 2023 , ביניהם הסרט, התסריט, הבימוי והמשחק הטובים ביותר. כשאבל (לואי גארל) שומע שאימו עומדת להתחתן עם אסיר שהכירה', 'eddb0850-15f3-4a00-a9df-a7772d860944.jpg'),
(67, 4, 3, '12 המושבעים', '16:30', 135, '', 'https://youtu.be/_13J_9B5jEk', '12 המושבעים (באנגלית: ‎12 Angry Men) הוא סרט דרמה משנת 1957, בכיכובו של הנרי פונדה. התסריט נכתב על ידי רג\'ינלד רוז, על פי מחזה שכתב כמה שנים קודם לכן', '3722bf32-539c-414d-94ac-a1a834c552b8.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `theaters`
--

CREATE TABLE `theaters` (
  `theaterId` int(11) NOT NULL,
  `theaterName` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `theaters`
--

INSERT INTO `theaters` (`theaterId`, `theaterName`) VALUES
(1, 'Lev'),
(2, 'Yes Planet'),
(3, 'Noga'),
(4, 'Cinema City');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `userId` int(11) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`userId`, `firstName`, `lastName`, `email`, `password`) VALUES
(1, 'Bart', 'simpson', 'bart@gmail.com', '1234'),
(2, 'marge1', 'simpson', 'marge@gmail.com', '12345'),
(3, 'undefined', 'undefined', 'undefined', 'undefined'),
(4, 'haron', 'halevy', 'haron@gmail.com', '12345678');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`blogId`);

--
-- Indexes for table `buy`
--
ALTER TABLE `buy`
  ADD PRIMARY KEY (`buyId`);

--
-- Indexes for table `chair`
--
ALTER TABLE `chair`
  ADD PRIMARY KEY (`chairId`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`genreId`);

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`movieId`),
  ADD KEY `theaterId` (`theaterId`),
  ADD KEY `genreId` (`genreId`);

--
-- Indexes for table `theaters`
--
ALTER TABLE `theaters`
  ADD PRIMARY KEY (`theaterId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `blogId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `buy`
--
ALTER TABLE `buy`
  MODIFY `buyId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `chair`
--
ALTER TABLE `chair`
  MODIFY `chairId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `genreId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `movieId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT for table `theaters`
--
ALTER TABLE `theaters`
  MODIFY `theaterId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `movies`
--
ALTER TABLE `movies`
  ADD CONSTRAINT `movies_ibfk_1` FOREIGN KEY (`theaterId`) REFERENCES `theaters` (`theaterId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
