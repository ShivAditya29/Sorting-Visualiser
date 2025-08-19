# Sorting Visualizer

An interactive web application that visualizes various sorting algorithms in real-time. Built with React, Redux, and modern web technologies.

## Features

- **Multiple Sorting Algorithms**: Bubble Sort, Quick Sort, Merge Sort, and Heap Sort
- **Real-time Visualization**: Watch the sorting process step by step
- **Interactive Controls**: Adjust array size, speed, and algorithm selection
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface

## Technologies Used

- **Frontend**: React 15.4.2, Redux 3.6.0
- **Build Tool**: Webpack 1.14.0
- **Styling**: CSS3
- **Deployment**: Vercel (ready for deployment)

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd Sorting-Visualizer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:1337`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start the production server

## Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
Sorting-Visualizer/
├── client/
│   ├── app/
│   │   ├── algorithms/     # Sorting algorithm implementations
│   │   ├── components/     # React components
│   │   └── reducers/       # Redux reducers
│   ├── public/            # Built files
│   └── styling/           # Static assets
├── server/                # Express server
├── index.html            # Main HTML file
├── package.json          # Dependencies and scripts
├── webpack.config.js     # Webpack configuration
└── vercel.json          # Vercel deployment config
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Built as a learning project for understanding sorting algorithms
- Inspired by various sorting visualizers available online
