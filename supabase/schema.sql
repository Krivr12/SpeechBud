-- ==========================================
-- SPEECHBUD — Supabase Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ==========================================

-- ==========================================
-- TABLE: testimonials
-- Stores user testimonials shown in the Home page carousel
-- ==========================================
CREATE TABLE IF NOT EXISTS testimonials (
  id         BIGSERIAL PRIMARY KEY,
  quote      TEXT        NOT NULL,
  name       TEXT        NOT NULL,
  role       TEXT        NOT NULL,
  avatar     TEXT        NOT NULL DEFAULT '👤',
  stars      SMALLINT    NOT NULL DEFAULT 5 CHECK (stars BETWEEN 1 AND 5),
  is_approved BOOLEAN    NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==========================================
-- ROW LEVEL SECURITY - Allow public read of approved testimonials
-- ==========================================
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read approved testimonials"
  ON testimonials
  FOR SELECT
  USING (is_approved = TRUE);

-- ==========================================
-- SEED DATA - Initial 7 testimonials
-- ==========================================
INSERT INTO testimonials (quote, name, role, avatar, stars) VALUES
(
  'Dati ayaw na ayaw ng anak ko mag-practice. Ngayon, siya pa mismo ang nagbubukas ng SpeechBud bago pa ako makapagsabi. Grabe ang improvement niya in just 2 months!',
  'Ate Maricel S.',
  'Nanay ng 5-taong-gulang, Quezon City',
  '👩',
  5
),
(
  'As a licensed SLP here in the Philippines, I''m impressed by how accurate the AI feedback is. I now recommend SpeechBud to families who can''t afford weekly clinic sessions.',
  'Ma''am Kristine D., ReSP',
  'PRC-Licensed Speech-Language Pathologist, Makati',
  '👩‍⚕️',
  5
),
(
  'My son has autism and we''ve been struggling to find affordable therapy in our area. SpeechBud has been a blessing — the exercises are fun and he actually looks forward to them.',
  'Kuya Rodel M.',
  'Parent of a 7-year-old, Cebu City',
  '👨',
  5
),
(
  'Bilang SPED teacher, I use SpeechBud as a supplement for my students. The progress reports help me coordinate better with parents and adjust my classroom strategies.',
  'Teacher Liza A.',
  'SPED Teacher, DepEd Pasig City',
  '👩‍🏫',
  5
),
(
  'Hindi ako makapaniwala na ganito ka-affordable. Ang isang session sa clinic ay ₱800 to ₱1,500 — dito sa SpeechBud, unlimited na ang exercises ng anak ko for less than that per month!',
  'Nanay Josie R.',
  'Nanay ng 4-taong-gulang, Davao City',
  '👩‍👧',
  5
),
(
  'We live in a province where there are no SLP clinics nearby. SpeechBud literally changed our lives. My daughter can now say full sentences clearly — something we thought would take years.',
  'Tatay Arnel C.',
  'Parent of a 6-year-old, Iloilo',
  '👨‍👧',
  5
),
(
  'Ang lola ko pa ang nagturo sa akin kung paano gamitin ang SpeechBud para sa apo namin. Madaling gamitin, kahit hindi tech-savvy. Sobrang helpful ng progress reports!',
  'Lola Nena B.',
  'Lola ng 5-taong-gulang, Batangas',
  '👵',
  5
);
