# Personal Finance Tracker

A modern, responsive web application for tracking personal finances, built with Next.js and MongoDB.

![Personal Finance Tracker](https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200&h=400)

## Features

- 💰 Track income and expenses
- 📊 Visual data representation with charts
- 📱 Responsive design for all devices
- 🌙 Light/Dark mode support
- ⚡ Real-time updates
- 🔍 Transaction history with search and filter
- 📈 Monthly expense analysis

## Tech Stack

- **Frontend**: Next.js, React, Tailwind CSS
- **UI Components**: shadcn/ui
- **Charts**: Recharts
- **Database**: MongoDB
- **Form Handling**: React Hook Form, Zod
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- MongoDB database
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/personal-finance-tracker.git
   ```

2. Install dependencies:
   ```bash
   cd personal-finance-tracker
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── transactions/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── ExpensesChart.js
│   ├── TransactionForm.js
│   ├── TransactionList.js
│   └── ui/
├── lib/
│   └── mongodb.js
└── public/
```

## Features in Detail

### Transaction Management
- Add new transactions with amount, description, and date
- Edit existing transactions
- Delete transactions
- View transaction history in a sortable table

### Financial Overview
- Total balance calculation
- Income and expense breakdown
- Monthly expense tracking
- Visual representation of spending patterns

### User Interface
- Clean and intuitive design
- Responsive layout for all screen sizes
- Interactive charts and graphs
- Toast notifications for user feedback

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [MongoDB](https://www.mongodb.com/)# personalFinanceVisualizer
