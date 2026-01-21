#!/usr/bin/env node

import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx0QAeqmludnlu6t491PXY_EozyGK2E7JJ_hMPDXApVvqsNdoP9yislI1gmwvsGwnzfS0zpFHaoZkU3m5DfnAJIU1QxgCbXQjdOARtNclMf538t5hsmIzN-JSFd8Fxi-nshYkgyu2i2laOYkBfuu4Bq9SyvztehX4RGunlq19GWbcnXsxBJA2fPTl9sY03QQ3FpHS1qCpdxF1L38tgJvz290LM3jr5l5DM4aJ5LPNCkHVcPQumc68TPlK5GfT7XBJneMpVSwGiTlzF',
    filename: 'hero-background.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuYMFoG7pIBBzmnx_pPYjmpsanJkUSa_cNK47uK4-8vo6A4Eh4ym3YiIDovmpo4B1KORH3cG2sA6D8Ai9hdyRTed-rv1qmCEq8obskEKJM0iofucqppCC-Zwt7N4LLPURHGKAG2i4QwaDAQ-1r8vqIMIQa5PxyUgkR7ZZuVBSLbmfB6tETv9Fciq0OFAKJTerdvUq8KQmYlWXcGDBbdw7dF9N_F-ZZM5GDnG8ui4Fh9naBDLCbnLCKk2glsXE0bU8LEvfpcuPeD84d',
    filename: 'smart-forklift.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPCfcN_fzFX9orBdV_jsTuiVZC44cHdfjLeJylnTUAMm-sTDUARWiPXKa_OdZYcWNS_3iGa2-zNtlPpYYunzdgjsduU2BgMuB4yrzN54o4VntSOlbpmHjFov1qJ1yG7SUAx04EHESKrVjQaOyIZCg44NMhc9J9RaXPPXG7HqHfRT3EC48inCEzwvgMQ2JVOkeo0bo-kNTNq92V0XlvBghJIzArQ3nrwLXsDpC_pMtnq6XhAqWf__ubkhm8nV1extEy5qfoHNQM_mpq',
    filename: 'logistics-solution.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsdmUHvweCs5S3vhQGs1QfCsZpx26DsRD1etrwoffcYAAZSrpHC2cPTQVqGSlr48jYom636X3RaSi2m7i0_v9fVCGFLrjYjWYKhz3rILn-lg2c44a3GXfv7-55sCQNWXJcQkn-wu3h7RGQqxiJbFaF55iyR3Kuu-kenizEN7CZ9i8TbZPjyeASZT3dcl9MB41Tp-IJd4qZNrUF94sUB5nmUhG_W4BVFaRTuG3mva9VrLiyD_RBOMD4cAQnycHbnGa9FMQmvSwKOOEz',
    filename: 'chassis-platform.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFIdM56LFpa38gT0pLMZ7PdAxlNdnSt3TSsBkqZtlHoBBKMPgJSoAIUK8kJA3-cy1JjNs9NLGDasvIm5xXuPevnSevXRYcQpJjeqzoE_gte83vuTKqwxD2t7ApOjqD2jXrBw9tgFDBkVjFCBTL20hRmqlS67wrtdvUPJ3mVOREvA3cuvVIgaSmkAJ_BK-DO5EaAKD-QfeidaJJ_srF3dOm3g3yYj15ISxnkBexJFnERaZYPlmlxF77_CRvUEym5dD4Bp5rHn5Q9sE7',
    filename: 'petrochemical-case.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmKnDF4WNlIivwVKUkK8a5uZ-M3C5EniDUjg65Boi7V-s_3ho8wERDQ0Js7MI_PwA8Jy3zW8cwDaj4MM5Tpx6of1HKzejs32xufpCwBvLWsQl7g-IE7KjhtHHSshPcpYDHc1Fq81KXahrwCamYdMZuyp2u4zCCfyVuZSrsjoa8rCyJL6lCUTJ-jIzZy4eA6gklZHHSgDhKWexTugJaC6BEH3Ddc7Avyi2WyHpmR16fW_8-HCeuiXJNZOMB2ABcjzcq1eL-Y0a74JYd',
    filename: 'automotive-case.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt56Fcsz8UGJaL0B4O2TlUYFbNMQZHpa5gLbahbm6IXCREcmxMVqfdma1cbBgLe-NcnYQPA07vejskwNjiv73qNeO3pQUcFzvpcIzIbUvs8eu-SUIZLh76P8i-emCcie1zTjkJH3LxnWy-Z--jAyoKIFt27hCTmOm-dDUWqPLiGyKHDnZ1FAZ5yUsvGyCZ_fOkAZu1W9_pTVw8NsZEIye1WRiC0SR8bLUkUI9O2QkjFWexmqCM5wGtQ2diWuhcND7fG21DPpKybllB',
    filename: 'cold-chain-case.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpyTREJ0prJ6JtK5M1LETVixhjZ8jaqSQhYR14X9h5gXwrDb966fRTDIN0p4c3jLcx4-tBxHKpjlOv7M2AsGHGGggaFzRiUgg_h_V7472Vg_fewq4sGXqeWPSFFfDg7gG4CSu5PkYwZIALiZPioEJmSS-woZZRHkRgqJrJnooeeQExJA_5zpMFd4SXMg-iP5MbDB3etdEJoLTcmj9cWF2ndTXUgH2n7g-XFtPz01TUuczFQATYdULGbqCRAXCo8LfsYn_1LLgKdaGC',
    filename: 'team-member.jpg'
  }
];

const fonts = [
  {
    name: 'Material Symbols Outlined',
    url: 'https://fonts.gstatic.com/s/materialsymbolsoutlined/v219/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2',
    filename: 'material-symbols-outlined.woff2'
  },
  {
    name: 'Space Grotesk 300',
    url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2',
    filename: 'space-grotesk-300.woff2'
  },
  {
    name: 'Space Grotesk 400',
    url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2',
    filename: 'space-grotesk-400.woff2'
  },
  {
    name: 'Space Grotesk 500',
    url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2',
    filename: 'space-grotesk-500.woff2'
  },
  {
    name: 'Space Grotesk 600',
    url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2',
    filename: 'space-grotesk-600.woff2'
  },
  {
    name: 'Space Grotesk 700',
    url: 'https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7mPbF4Cw.woff2',
    filename: 'space-grotesk-700.woff2'
  },
  {
    name: 'Noto Sans SC 300',
    url: 'https://fonts.gstatic.com/s/notosanssc/v36/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnY1Gw8FwkQ.woff2',
    filename: 'noto-sans-sc-300.woff2'
  },
  {
    name: 'Noto Sans SC 400',
    url: 'https://fonts.gstatic.com/s/notosanssc/v36/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnY1Gw8FwkQ.woff2',
    filename: 'noto-sans-sc-400.woff2'
  },
  {
    name: 'Noto Sans SC 500',
    url: 'https://fonts.gstatic.com/s/notosanssc/v36/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnY1Gw8FwkQ.woff2',
    filename: 'noto-sans-sc-500.woff2'
  },
  {
    name: 'Noto Sans SC 700',
    url: 'https://fonts.gstatic.com/s/notosanssc/v36/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnY1Gw8FwkQ.woff2',
    filename: 'noto-sans-sc-700.woff2'
  },
  {
    name: 'Noto Sans SC 900',
    url: 'https://fonts.gstatic.com/s/notosanssc/v36/k3kCo84MPvpLmixcA63oeAL7Iqp5IZJF9bmaG9_FnY1Gw8FwkQ.woff2',
    filename: 'noto-sans-sc-900.woff2'
  }
];

function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadFile(response.headers.location, filepath).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('开始下载资源...');
  
  // 下载图片
  console.log('\n下载图片...');
  for (const img of images) {
    const filepath = path.join(__dirname, '../public/images', img.filename);
    if (fs.existsSync(filepath)) {
      console.log(`跳过已存在: ${img.filename}`);
      continue;
    }
    try {
      console.log(`下载中: ${img.filename}`);
      await downloadFile(img.url, filepath);
      console.log(`✓ 完成: ${img.filename}`);
    } catch (error) {
      console.error(`✗ 失败: ${img.filename} - ${error.message}`);
    }
  }
  
  // 下载字体（使用替代的 CDN 或本地字体）
  console.log('\n注意: 字体文件需要使用国内镜像或手动下载');
  console.log('建议使用以下替代方案:');
  console.log('1. 使用思源黑体替代 Noto Sans SC');
  console.log('2. 使用系统字体替代 Space Grotesk');
  console.log('3. 使用 iconify 替代 Material Symbols');
  
  console.log('\n下载完成！');
}

downloadAll().catch(console.error);
