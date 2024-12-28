import { useEffect, useState } from 'react';

interface Post {
  title: string;
  type: 'writing' | 'quote' | 'photo';
  content?: string;
  quote?: string;
  imageUrl?: string;
}

const Technology = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const technologyPosts: Post[] = [
      // New Posts Added Above
      {
        title: 'The Evolution of Artificial Intelligence',
        type: 'writing',
        content: 'Artificial Intelligence (AI) has evolved from simple rule-based systems to complex deep learning algorithms capable of surpassing human performance in specific tasks. This post delves into the evolution of AI technologies.',
        imageUrl: 'https://www.techradar.com/news/ai-evolution.jpg', // AI Evolution image
      },
      {
        title: 'Autonomous Vehicles and the Future of Transportation',
        type: 'writing',
        content: 'Autonomous vehicles are set to change how we think about transportation, offering safer, more efficient, and environmentally-friendly alternatives to traditional vehicles.',
        imageUrl: 'https://www.sensysgatso.com/wp-content/uploads/2021/02/autonomous-vehicle.jpg', // Autonomous vehicles image
      },
      {
        title: 'The Impact of Augmented Reality on Education',
        type: 'writing',
        content: 'Augmented Reality (AR) is transforming education by providing immersive learning experiences. This post explores how AR is being used to enhance the classroom experience.',
        imageUrl: 'https://www.immersivelearning.news/wp-content/uploads/2020/06/ar-in-education.jpg', // AR Education image
      },
      {
        title: 'The Role of 3D Printing in Manufacturing',
        type: 'writing',
        content: '3D printing is revolutionizing manufacturing by enabling faster prototyping, reducing costs, and allowing for the production of highly customized products.',
        imageUrl: 'https://www.solidworks.com/sites/solidworks/files/2021-03/3d-printing.jpg', // 3D Printing image
      },
      {
        title: 'Robotic Process Automation (RPA) in Business',
        type: 'writing',
        content: 'Robotic Process Automation (RPA) is transforming business operations by automating repetitive tasks, allowing businesses to increase efficiency and reduce errors.',
        imageUrl: 'https://www.uipath.com/hubfs/rpa.jpg', // RPA image
      },

      // Previous Posts Below
      {
        title: 'The Rise of Artificial Intelligence',
        type: 'writing',
        content: 'Artificial intelligence (AI) is rapidly transforming our world, from the way we work to the way we live. This post explores the current state of AI and its potential impact on the future.',
        imageUrl: 'https://www.sas.com/content/dam/SAS/en_us/images/insights/ai-machine-learning.jpg', // AI image
      },
      {
        title: 'Elon Musk',
        type: 'quote',
        quote: 'The future of transportation is electric.',
      },
      {
        title: 'Cybersecurity in the Digital Age',
        type: 'writing',
        content: 'Cybersecurity is the practice of protecting systems, networks, and data from unauthorized access, use, disclosure, disruption, modification, or destruction. As our reliance on technology grows, so does the importance of cybersecurity.',
        imageUrl: 'https://www.csoonline.com/wp-content/uploads/2019/11/CSO-hero-security.jpg', // Cybersecurity image
      },
      {
        title: 'Steve Jobs',
        type: 'quote',
        quote: 'Innovation distinguishes between a leader and a follower.',
      },
      {
        title: 'The Internet of Things (IoT)',
        type: 'writing',
        content: 'The Internet of Things (IoT) refers to the interconnection of physical devices – embedded with sensors, software, and other technologies – that allows them to collect and exchange data. This technology has the potential to revolutionize many aspects of our lives.',
        imageUrl: 'https://www.iiot-world.com/wp-content/uploads/2020/06/IoT-connected-devices.jpg', // IoT image
      },
      {
        title: 'The Future of 5G Technology',
        type: 'writing',
        content: '5G technology is set to revolutionize mobile connectivity with faster speeds, lower latency, and more reliable connections, enabling innovations like autonomous vehicles and advanced IoT applications.',
        imageUrl: 'https://www.qualcomm.com/sites/default/files/2022-10/5G_hero_1200x675.jpg', // 5G image
      },
      {
        title: 'Blockchain: Beyond Cryptocurrency',
        type: 'writing',
        content: 'Blockchain technology is most commonly associated with cryptocurrency, but it has numerous other applications, including supply chain management, secure voting, and digital contracts.',
        imageUrl: 'https://media.bitcoin.com/wp-content/uploads/2019/01/Blockchain-header-1280x640.jpg', // Blockchain image
      },
      {
        title: 'The Rise of Quantum Computing',
        type: 'writing',
        content: 'Quantum computing promises to exponentially increase computing power, with the potential to solve problems that are currently intractable for classical computers, such as simulating complex molecules for drug discovery.',
        imageUrl: 'https://www.ibm.com/blog/wp-content/uploads/2021/03/IBM-Quantum-Computing.jpg', // Quantum computing image
      },
      {
        title: 'Elon Musk on SpaceX',
        type: 'quote',
        quote: 'When something is important enough, you do it even if the odds are not in your favor.',
      },
      {
        title: 'The Power of Cloud Computing',
        type: 'writing',
        content: 'Cloud computing is transforming the way businesses and individuals store and access data, offering flexible, scalable, and cost-effective solutions for a wide range of applications.',
        imageUrl: 'https://www.oracle.com/a/ocom/img/cloud-hero.jpg', // Cloud computing image
      },
      {
        title: 'The Role of Big Data in Technology',
        type: 'writing',
        content: 'Big data refers to the massive amounts of structured and unstructured data generated every day, which can be analyzed for insights to improve decision-making, optimize processes, and predict future trends.',
        imageUrl: 'https://www.sas.com/content/dam/SAS/en_us/images/solutions/bigdata.jpg', // Big Data image
      },
    ];

    setPosts(technologyPosts); // Use simulated or fetched data
  }, []);

  return (
    <div className="technology p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Technology</h1>
      <div className="technology-container space-y-8">
        {posts.map((post, index) => (
          <div key={index} className="technology-post bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            {post.type === 'writing' && <p className="mt-4 text-gray-700">{post.content}</p>}
            {post.type === 'quote' && (
              <blockquote className="mt-4 text-xl italic text-gray-600 border-l-4 border-gray-400 pl-4">{post.quote}</blockquote>
            )}
            {post.type === 'photo' && <img className="mt-4 rounded-md" src={post.imageUrl} alt={post.title} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
