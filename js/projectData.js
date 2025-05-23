// Project data configuration
const projectData = {
    'autonomous-robot': {
        title: 'Autonomous Navigation Robot',
        subtitle: 'Advanced SLAM-based mobile robotics platform',
        heroImage: 'https://via.placeholder.com/1200x400/1a1a3e/64ffda?text=Autonomous+Navigation+System',
        duration: '8 months',
        role: 'Lead Robotics Engineer',
        team: '4 engineers',
        status: '✅ Completed',
        techStack: ['ROS2', 'PyTorch', 'OpenCV', 'LIDAR', 'Python', 'C++', 'Gazebo', 'Navigation2'],
        github: 'https://github.com/yourusername/autonomous-robot',
        demo: 'https://your-demo-link.com',
        description: `
            <h3>Project Overview</h3>
            <p>This project involved developing a fully autonomous mobile robot capable of navigating complex indoor and outdoor environments. The system integrates simultaneous localization and mapping (SLAM), advanced path planning algorithms, and deep reinforcement learning for dynamic obstacle avoidance.</p>
            
            <p>The robot successfully demonstrated autonomous navigation in various challenging scenarios, including crowded spaces, narrow corridors, and dynamic environments with moving obstacles.</p>
        `,
        features: `
            <h3>Key Features</h3>
            <ul>
                <li><strong>Real-time SLAM:</strong> Implemented FastSLAM algorithm with particle filter for accurate localization and mapping</li>
                <li><strong>Dynamic Path Planning:</strong> A* and RRT* algorithms with real-time replanning capabilities</li>
                <li><strong>Deep RL Navigation:</strong> Custom PPO-based agent for obstacle avoidance in crowded environments</li>
                <li><strong>Multi-sensor Fusion:</strong> LIDAR, IMU, and wheel odometry integration for robust localization</li>
                <li><strong>Safety Systems:</strong> Emergency stop, collision detection, and safe recovery behaviors</li>
                <li><strong>ROS2 Architecture:</strong> Modular design with distributed nodes for scalability</li>
            </ul>
        `,
        challenges: `
            <h3>Technical Challenges</h3>
            <p><strong>Real-time Performance:</strong> Optimized SLAM algorithms to run at 30Hz while maintaining accuracy. Implemented multi-threading and GPU acceleration for computationally intensive tasks.</p>
            
            <p><strong>Dynamic Environments:</strong> Developed a hybrid approach combining classical path planning with deep reinforcement learning to handle unexpected obstacles and human interactions.</p>
            
            <p><strong>Sensor Fusion:</strong> Created robust sensor fusion algorithms to handle sensor failures and maintain navigation capability with degraded sensors.</p>
        `,
        results: `
            <h3>Results & Impact</h3>
            <p><strong>Performance Metrics:</strong></p>
            <ul>
                <li>99.2% successful navigation rate in test environments</li>
                <li>Average path efficiency of 94% compared to optimal paths</li>
                <li>Real-time operation at 30Hz with sub-10cm localization accuracy</li>
                <li>Successfully navigated >500km in testing without human intervention</li>
            </ul>
            
            <p>The project received recognition at the International Conference on Robotics and Automation (ICRA) and has been adopted by three research institutions for further development.</p>
        `,
        gallery: [
            'https://via.placeholder.com/400x300/1a1a3e/64ffda?text=Robot+Hardware',
            'https://via.placeholder.com/400x300/2d1b69/7c4dff?text=SLAM+Mapping',
            'https://via.placeholder.com/400x300/1a1a3e/64ffda?text=Path+Planning',
            'https://via.placeholder.com/400x300/2d1b69/7c4dff?text=Sensor+Data'
        ]
    },
    'object-tracking': {
        title: 'Real-time Object Detection & Tracking',
        subtitle: 'Advanced computer vision system for multi-object tracking',
        heroImage: 'https://via.placeholder.com/1200x400/2d1b69/7c4dff?text=Computer+Vision+System',
        duration: '6 months',
        role: 'Computer Vision Engineer',
        team: '3 engineers',
        status: '🚀 In Production',
        techStack: ['YOLO', 'TensorFlow', 'OpenCV', 'CUDA', 'C++', 'Python', 'TensorRT', 'Docker'],
        github: 'https://github.com/yourusername/object-tracking',
        demo: 'https://your-demo-link.com',
        paper: 'https://your-paper-link.com',
        description: `
            <h3>Project Overview</h3>
            <p>Developed a high-performance real-time object detection and tracking system capable of simultaneously tracking multiple objects across different categories. The system is optimized for edge deployment and achieves real-time performance on consumer-grade hardware.</p>
            
            <p>The solution combines state-of-the-art YOLO detection with advanced tracking algorithms, featuring robust performance in challenging conditions including occlusions, lighting changes, and crowded scenes.</p>
        `,
        features: `
            <h3>Key Features</h3>
            <ul>
                <li><strong>Multi-Object Detection:</strong> Custom YOLOv8 model trained on 15+ object categories</li>
                <li><strong>Advanced Tracking:</strong> DeepSORT with custom re-identification features</li>
                <li><strong>Real-time Performance:</strong> 60+ FPS on RTX 3080, 30+ FPS on edge devices</li>
                <li><strong>Occlusion Handling:</strong> Robust tracking through temporary occlusions</li>
                <li><strong>Multi-Camera Support:</strong> Cross-camera object re-identification</li>
                <li><strong>Edge Optimization:</strong> TensorRT optimization for NVIDIA Jetson deployment</li>
            </ul>
        `,
        challenges: `
            <h3>Technical Challenges</h3>
            <p><strong>Real-time Constraints:</strong> Optimized the entire pipeline to achieve 60+ FPS while maintaining high accuracy. Implemented custom CUDA kernels for preprocessing and postprocessing operations.</p>
            
            <p><strong>Tracking Robustness:</strong> Developed adaptive tracking algorithms that maintain object identity through occlusions, scale changes, and appearance variations using deep feature learning.</p>
            
            <p><strong>Edge Deployment:</strong> Reduced model size by 80% through quantization and pruning while maintaining 95% of original accuracy for deployment on resource-constrained devices.</p>
        `,
        results: `
            <h3>Results & Impact</h3>
            <p><strong>Performance Metrics:</strong></p>
            <ul>
                <li>97.3% detection accuracy (mAP@0.5) on custom dataset</li>
                <li>94.8% tracking accuracy (MOTA) in crowded scenarios</li>
                <li>Real-time performance: 62 FPS on RTX 3080, 31 FPS on Jetson Xavier</li>
                <li>Successfully deployed in 5+ production environments</li>
            </ul>
            
            <p>Published research paper at CVPR 2024 and the system is now being used in retail analytics, traffic monitoring, and security applications.</p>
        `,
        gallery: [
            'https://via.placeholder.com/400x300/2d1b69/7c4dff?text=Detection+Results',
            'https://via.placeholder.com/400x300/1a1a3e/64ffda?text=Tracking+Visualization',
            'https://via.placeholder.com/400x300/2d1b69/7c4dff?text=Performance+Charts',
            'https://via.placeholder.com/400x300/1a1a3e/64ffda?text=Edge+Deployment'
        ]
    },
    'nas-platform': {
        title: 'Neural Architecture Search Platform',
        subtitle: 'Automated deep learning architecture discovery system',
        heroImage: 'https://via.placeholder.com/1200x400/2d1b69/7c4dff?text=Neural+Architecture+Search',
        duration: '10 months',
        role: 'ML Research Engineer',
        team: '2 engineers',
        status: '🔬 Research Phase',
        techStack: ['PyTorch', 'Ray Tune', 'Docker', 'MLflow', 'Python', 'Optuna', 'Weights & Biases', 'Kubernetes'],
        github: 'https://github.com/yourusername/nas-platform',
        demo: 'https://your-demo-link.com',
        description: `
            <h3>Project Overview</h3>
            <p>Created an automated neural architecture search platform that discovers optimal deep learning architectures for specific tasks and datasets. The system combines evolutionary algorithms, reinforcement learning, and gradient-based optimization to explore the architecture space efficiently.</p>
            
            <p>The platform significantly reduces the manual effort required in neural network design while discovering architectures that often outperform human-designed models.</p>
        `,
        features: `
            <h3>Key Features</h3>
            <ul>
                <li><strong>Multi-Strategy Search:</strong> Evolutionary, RL-based, and differentiable NAS methods</li>
                <li><strong>Efficient Search:</strong> Early stopping and progressive search strategies</li>
                <li><strong>Custom Search Spaces:</strong> Flexible definition of architecture search spaces</li>
                <li><strong>Multi-Objective Optimization:</strong> Balance accuracy, latency, and model size</li>
                <li><strong>Distributed Training:</strong> Scalable search across multiple GPUs/nodes</li>
                <li><strong>Experiment Tracking:</strong> Comprehensive logging and visualization</li>
            </ul>
        `,
        challenges: `
            <h3>Technical Challenges</h3>
            <p><strong>Search Efficiency:</strong> Developed novel early stopping criteria and progressive search strategies that reduced search time by 75% while maintaining discovery quality.</p>
            
            <p><strong>Multi-Objective Optimization:</strong> Implemented Pareto-optimal search algorithms to simultaneously optimize for accuracy, inference speed, and model size constraints.</p>
            
            <p><strong>Scalability:</strong> Designed distributed search framework that scales efficiently across multiple GPUs and compute nodes using Ray and Kubernetes.</p>
        `,
        results: `
            <h3>Results & Impact</h3>
            <p><strong>Performance Metrics:</strong></p>
            <ul>
                <li>Discovered architectures achieve 2.1% higher accuracy on ImageNet</li>
                <li>75% reduction in search time compared to baseline methods</li>
                <li>Found models with 40% fewer parameters maintaining same accuracy</li>
                <li>Successfully applied to 8 different domains and datasets</li>
            </ul>
            
            <p>Research submitted to NeurIPS 2024. The platform is being used by 3 research groups and has been integrated into production ML pipelines at 2 companies.</p>
        `,
        gallery: [
            'https://via.placeholder.com/400x300/2d1b69/7c4dff?text=Architecture+Discovery',
            'https://via.placeholder.com/400x300/1a1a3e/64ffda?text=Performance+Comparison',
            'https://via.placeholder.com/400x300/2d1b69/7c4dff?text=Search+Progress',
            'https://via.placeholder.com/400x300/1a1a3e/64ffda?text=Platform+Interface'
        ]
    },
    'robotic-arm': {
        title: 'Intelligent Robotic Manipulation',
        subtitle: '6-DOF robotic arm with advanced manipulation capabilities',
        heroImage: 'https://via.placeholder.com/1200x400/1a1a3e/64ffda?text=Robotic+Manipulation+System',
        duration: '12 months',
        role: 'Robotics Software Engineer',
        team: '5 engineers',
        status: '✅ Completed',
        techStack: ['ROS', 'MoveIt', 'Gazebo', 'PCL', 'C++', 'Python', 'OpenCV', 'PyTorch'],
        github: 'https://github.com/yourusername/robotic-arm',
        demo: 'https://your-video-link.com',
        description: `
            <h3>Project Overview</h3>
            <p>Developed a comprehensive robotic manipulation system featuring a 6-DOF robotic arm with advanced vision-guided manipulation capabilities. The system integrates tactile feedback, learned grasping strategies, and sophisticated motion planning for complex object manipulation tasks.</p>
            
            <p>The robot successfully demonstrates human-level dexterity in picking, placing, and manipulating objects of various shapes, sizes, and materials in unstructured environments.</p>
        `,
        features: `
            <h3>Key Features</h3>
            <ul>
                <li><strong>Vision-Guided Manipulation:</strong> RGB-D based object detection and 6D pose estimation</li>
                <li><strong>Adaptive Grasping:</strong> Deep learning-based grasp planning for unknown objects</li>
                <li><strong>Tactile Feedback:</strong> Force/torque sensing for delicate manipulation tasks</li>
                <li><strong>Motion Planning:</strong> Real-time collision-free trajectory generation</li>
                <li><strong>Learning from Demonstration:</strong> Imitation learning for complex manipulation sequences</li>
                <li><strong>Safety Systems:</strong> Comprehensive safety monitoring and emergency stops</li>
            </ul>
        `,
        challenges: `
            <h3>Technical Challenges</h3>
            <p><strong>Grasp Planning:</strong> Developed a novel deep learning approach that combines geometric and learned features to generate robust grasps for unknown objects with 92% success rate.</p>
            
            <p><strong>Real-time Performance:</strong> Optimized the entire perception and planning pipeline to achieve real-time performance while maintaining high accuracy in dynamic environments.</p>
            
            <p><strong>Tactile Integration:</strong> Created sophisticated tactile feedback algorithms that enable fine manipulation tasks like inserting USB connectors and handling fragile objects.</p>
        `,
        results: `
            <h3>Results & Impact</h3>
            <p><strong>Performance Metrics:</strong></p>
            <ul>
                <li>92% grasp success rate on unknown objects</li>
                <li>Sub-millimeter positioning accuracy for precision tasks</li>
                <li>Successfully completed 15 different manipulation benchmarks</li>
                <li>Reduced task completion time by 60% compared to previous systems</li>
            </ul>
            
            <p>The system has been demonstrated at multiple robotics conferences and is being considered for deployment in manufacturing and laboratory automation applications.</p>
        `,
        gallery: [
            'https://via.placeholder.com/400x300/1a1a3e/64ffda?text=Robotic+Arm+Setup',
            'https://via.placeholder.com/400x300/2d1b69/7c4dff?text=Grasp+Planning',
            'https://via.placeholder.com/400x300/1a1a3e/64ffda?text=Manipulation+Tasks',
            'https://via.placeholder.com/400x300/2d1b69/7c4dff?text=Vision+System'
        ]
    }
};