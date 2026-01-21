#!/usr/bin/env node

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');

// 确保目录存在
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const images = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx0QAeqmludnlu6t491PXY_EozyGK2E7JJ_hMPDXApVvqsNdoP9yislI1gmwvsGwnzfS0zpFHaoZkU3m5DfnAJIU1QxgCbXQjdOARtNclMf538t5hsmIzN-JSFd8Fxi-nshYkgyu2i2laOYkBfuu4Bq9SyvztehX4RGunlq19GWbcnXsxBJA2fPTl9sY03QQ3FpHS1qCpdxF1L38tgJvz290LM3jr5l5DM4aJ5LPNCkHVcPQumc68TPlK5GfT7XBJneMpVSwGiTlzF',
    filename: 'hero-background.jpg',
    description: '首页Hero背景图'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuYMFoG7pIBBzmnx_pPYjmpsanJkUSa_cNK47uK4-8vo6A4Eh4ym3YiIDovmpo4B1KORH3cG2sA6D8Ai9hdyRTed-rv1qmCEq8obskEKJM0iofucqppCC-Zwt7N4LLPURHGKAG2i4QwaDAQ-1r8vqIMIQa5PxyUgkR7ZZuVBSLbmfB6tETv9Fciq0OFAKJTerdvUq8KQmYlWXcGDBbdw7dF9N_F-ZZM5GDnG8ui4Fh9naBDLCbnLCKk2glsXE0bU8LEvfpcuPeD84d',
    filename: 'smart-forklift.jpg',
    description: '智能叉车产品图'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPCfcN_fzFX9orBdV_jsTuiVZC44cHdfjLeJylnTUAMm-sTDUARWiPXKa_OdZYcWNS_3iGa2-zNtlPpYYunzdgjsduU2BgMuB4yrzN54o4VntSOlbpmHjFov1qJ1yG7SUAx04EHESKrVjQaOyIZCg44NMhc9J9RaXPPXG7HqHfRT3EC48inCEzwvgMQ2JVOkeo0bo-kNTNq92V0XlvBghJIzArQ3nrwLXsDpC_pMtnq6XhAqWf__ubkhm8nV1extEy5qfoHNQM_mpq',
    filename: 'logistics-solution.jpg',
    description: '物流解决方案图'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsdmUHvweCs5S3vhQGs1QfCsZpx26DsRD1etrwoffcYAAZSrpHC2cPTQVqGSlr48jYom636X3RaSi2m7i0_v9fVCGFLrjYjWYKhz3rILn-lg2c44a3GXfv7-55sCQNWXJcQkn-wu3h7RGQqxiJbFaF55iyR3Kuu-kenizEN7CZ9i8TbZPjyeASZT3dcl9MB41Tp-IJd4qZNrUF94sUB5nmUhG_W4BVFaRTuG3mva9VrLiyD_RBOMD4cAQnycHbnGa9FMQmvSwKOOEz',
    filename: 'chassis-platform.jpg',
    description: '底盘平台图'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFIdM56LFpa38gT0pLMZ7PdAxlNdnSt3TSsBkqZtlHoBBKMPgJSoAIUK8kJA3-cy1JjNs9NLGDasvIm5xXuPevnSevXRYcQpJjeqzoE_gte83vuTKqwxD2t7ApOjqD2jXrBw9tgFDBkVjFCBTL20hRmqlS67wrtdvUPJ3mVOREvA3cuvVIgaSmkAJ_BK-DO5EaAKD-QfeidaJJ_srF3dOm3g3yYj15ISxnkBexJFnERaZYPlmlxF77_CRvUEym5dD4Bp5rHn5Q9sE7',
    filename: 'petrochemical-case.jpg',
    description: '石油化工案例'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmKnDF4WNlIivwVKUkK8a5uZ-M3C5EniDUjg65Boi7V-s_3ho8wERDQ0Js7MI_PwA8Jy3zW8cwDaj4MM5Tpx6of1HKzejs32xufpCwBvLWsQl7g-IE7KjhtHHSshPcpYDHc1Fq81KXahrwCamYdMZuyp2u4zCCfyVuZSrsjoa8rCyJL6lCUTJ-jIzZy4eA6gklZHHSgDhKWexTugJaC6BEH3Ddc7Avyi2WyHpmR16fW_8-HCeuiXJNZOMB2ABcjzcq1eL-Y0a74JYd',
    filename: 'automotive-case.jpg',
    description: '汽车制造案例'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt56Fcsz8UGJaL0B4O2TlUYFbNMQZHpa5gLbahbm6IXCREcmxMVqfdma1cbBgLe-NcnYQPA07vejskwNjiv73qNeO3pQUcFzvpcIzIbUvs8eu-SUIZLh76P8i-emCcie1zTjkJH3LxnWy-Z--jAyoKIFt27hCTmOm-dDUWqPLiGyKHDnZ1FAZ5yUsvGyCZ_fOkAZu1W9_pTVw8NsZEIye1WRiC0SR8bLUkUI9O2QkjFWexmqCM5wGtQ2diWuhcND7fG21DPpKybllB',
    filename: 'cold-chain-case.jpg',
    description: '冷链物流案例'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpyTREJ0prJ6JtK5M1LETVixhjZ8jaqSQhYR14X9h5gXwrDb966fRTDIN0p4c3jLcx4-tBxHKpjlOv7M2AsGHGGggaFzRiUgg_h_V7472Vg_fewq4sGXqeWPSFFfDg7gG4CSu5PkYwZIALiZPioEJmSS-woZZRHkRgqJrJnooeeQExJA_5zpMFd4SXMg-iP5MbDB3etdEJoLTcmj9cWF2ndTXUgH2n7g-XFtPz01TUuczFQATYdULGbqCRAXCo8LfsYn_1LLgKdaGC',
    filename: 'team-member.jpg',
    description: '团队成员图'
  }
];

function downloadFile(url, filepath, description) {
  return new Promise((resolve, reject) => {
    // 检查文件是否已存在
    if (fs.existsSync(filepath)) {
      console.log(`✓ 已存在: ${path.basename(filepath)} (${description})`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(filepath);
    const protocol = url.startsWith('https') ? https : http;

    const request = protocol.get(url, (response) => {
      // 处理重定向
      if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307 || response.statusCode === 308) {
        file.close();
        fs.unlinkSync(filepath);
        return downloadFile(response.headers.location, filepath, description).then(resolve).catch(reject);
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filepath);
        reject(new Error(`HTTP ${response.statusCode}: ${url}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`✓ 下载完成: ${path.basename(filepath)} (${description})`);
        resolve();
      });
    });

    request.on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });

    file.on('error', (err) => {
      file.close();
      if (fs.existsSync(filepath)) {
        fs.unlinkSync(filepath);
      }
      reject(err);
    });
  });
}

async function downloadAll() {
  console.log('开始下载图片资源...\n');

  let successCount = 0;
  let failCount = 0;
  const failed = [];

  for (const img of images) {
    const filepath = path.join(imagesDir, img.filename);
    
    try {
      await downloadFile(img.url, filepath, img.description);
      successCount++;
    } catch (error) {
      failCount++;
      failed.push({ ...img, error: error.message });
      console.error(`✗ 下载失败: ${img.filename} - ${error.message}`);
    }
  }

  console.log(`\n下载完成！`);
  console.log(`成功: ${successCount}/${images.length}`);
  console.log(`失败: ${failCount}/${images.length}`);

  if (failed.length > 0) {
    console.log('\n失败的图片：');
    failed.forEach(img => {
      console.log(`- ${img.filename}: ${img.url}`);
    });
    console.log('\n提示：如果无法访问 Google 图片，请手动下载：');
    console.log('1. 打开浏览器');
    console.log('2. 访问上面的 URL');
    console.log('3. 右键保存图片到 public/images/ 目录');
    console.log('4. 重命名为对应的文件名');
  }
}

downloadAll().catch(console.error);
