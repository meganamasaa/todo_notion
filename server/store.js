const blocks = [
  { id: 'block-001', type: 'heading', content: "Reason's why I love notion!" },
  { id: 'block-002', type: 'heading', content: 'Learner:' },
  { id: 'block-003', type: 'paragraph', content: "Before I started using notion, taking notes for my CS classes was a unorganized mess of iPad notes, Google Docs, & Lecture Video Screenshots. There was no good medium to put it all together." },
  { id: 'block-004', type: 'heading', content: 'Ideator:' },
  { id: 'block-005', type: 'paragraph', content: "I'm constantly thinking of new ideas: product ideas, startup ideas, random observations about things that could work better. I need to be able to write them immediately! With a combination of Notion Mobile & Notion AI. I get my ideas down right when I have them." },
  { id: 'block-006', type: 'heading', content: 'Tech-Savvy:' },
  { id: 'block-007', type: 'paragraph', content: "I don't just use Notion: I automate with it. When I was studying abroad in Madrid and traveling nearly every weekend, I built a fully connected travel planning system: a Bookings database in Notion with structured properties (Airline, Confirmation Code, Location, Date & Time, Type, Notes) that auto-populated straight from my Gmail. I even debugged the workflow in real time when date fields weren't rendering correctly." },
  { id: 'block-008', type: 'paragraph', content: "Notion isn't just a tool to me. It's how I take my technical passion and sprinkle it onto every aspect of my life. I want to build the features that helps the next multi-modal person continue do what I love!!" },
];

const editHistory = [];

module.exports = { blocks, editHistory };
