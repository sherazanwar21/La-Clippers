Web Application with Kubernetes, Minikube, and Docker
This repository contains a simple web application with a backend and frontend, deployed on Kubernetes using Minikube. Follow the steps below to set up and test the application on your local machine.
 
Prerequisites
Make sure you have the following installed:
•	Minikube: Install Minikube.
•	kubectl: Install kubectl.
•	Docker: Install Docker.
 
Steps to Test the Application
Step 1: Start Minikube
Start Minikube with the following command:
minikube start
This will start a local Kubernetes cluster in a VM.
Step 2: Set Docker Environment to Minikube
To build and push Docker images directly to Minikube's Docker daemon, run the following command:
eval $(minikube -p minikube docker-env)
This configures your local shell to use Minikube's Docker environment.
Step 3: Build the Docker Images
Now, build the Docker images for both the backend and frontend applications.

Backend Image:
Navigate to the backend directory (or the appropriate directory where the Dockerfile is located) and build the Docker image:
docker build -t backend .
Frontend Image:
Navigate to the frontend directory (or the appropriate directory where the Dockerfile is located) and build the Docker image:
docker build -t frontend .
Step 4: Deploy the Kubernetes Resources
You can deploy both the backend and frontend services using Helm charts or directly via Kubernetes manifests.
Deploy Backend:
To deploy the backend service, apply the following configuration:
kubectl apply -f backend-chart/templates/deployment.yaml
kubectl apply -f backend-chart/templates/service.yaml
Deploy Frontend:
To deploy the frontend service, apply the following configuration:
kubectl apply -f frontend-chart/templates/deployment.yaml
kubectl apply -f frontend-chart/templates/service.yaml
Step 5: Verify the Deployment
Check the status of your pods to ensure that everything is running correctly:
kubectl get pods
Check that the frontend and backend services are up:
kubectl get svc
Step 6: Access the Application
Minikube exposes your services through NodePorts. You can access the services using Minikube's IP address.
Get Minikube’s IP:
minikube ip
Frontend:
The frontend service should be accessible at:
http://<minikube-ip>:32247
Backend:
The backend service should be accessible at:
http://<minikube-ip>:30189
Step 7: (Optional) Port Forwarding for Local Access
If you're having trouble accessing the services via the Minikube IP, you can use kubectl port-forward to forward the ports locally:
kubectl port-forward svc/frontend 8080:80
kubectl port-forward svc/backend 5000:80
Then, you can access the frontend and backend services locally:
•	Frontend: http://localhost:8080
•	Backend: http://localhost:5000
 
Troubleshooting
•	Service Not Found: Ensure that your services are running using kubectl get svc.
•	Pod Not Starting: Check the logs of the pods for any issues:
kubectl logs <pod-name>
•	Minikube Not Accessible: If you're unable to access Minikube's IP from your browser, check that your firewall or network settings allow traffic on the required ports.
 
Conclusion
By following the steps above, you should be able to test the frontend and backend services deployed on Minikube with Kubernetes. If you encounter any issues, check the troubleshooting section or feel free to open an issue in this repository.
