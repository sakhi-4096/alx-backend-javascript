// Function to simulate a load balancer choosing between China and US downloads
export default function loadBalancer(chinaDownload, USDownload) {
  // Use Promise.race to determine which download completes first
  return Promise.race([chinaDownload, USDownload])
    .then((result) => result);
}
