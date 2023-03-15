import React from "react";
import "../../styles/service.css";
import feat1 from "../../assets/feat-1.svg";
import feat2 from "../../assets/feat-2.svg";
import feat3 from "../../assets/feat-3.svg";

const Service = () => {
  return (
    <div className="service-con">
      <div className="tawaran">
        <div className="title">
          <h2>LAYANAN KAMI TAWARKAN</h2>
          <div className="garis"></div>
        </div>

        {/* feat 1 */}
        <div className="feat-1">
          <div className="frame-6">
            <div className="frame-5">
              <h3>Penjualan Produk</h3>
              <p>
                Kami menyediakan layanan penjualan perangkat networking yang
                lengkap dan mudah. Kami menyediakan router, switch, modem,
                access point, seluler hotspot, dan perangkat jaringan lainnya.
                Kami juga menyediakan layanan instalasi perangkat, konfigurasi
                jaringan, dan dukungan teknis melalui telepon dan chat. Kami
                telah bekerja dengan berbagai vendor dan telah menjadi salah
                satu penyedia layanan networking terkemuka di industri.
              </p>
            </div>
            <div className="frame-4">
              <li className="mc">Murah dan Cepat</li>
              <li className="at">Aman dan Terpercaya</li>
              <li className="kb">Kondisi Barang Bagus</li>
            </div>
          </div>
          <div className="img-1">
            <img src={feat1} alt="" />
          </div>
        </div>
        <div className="feat-2">
          <div className="img-2">
            <img src={feat2} alt="" />
          </div>
          <div className="frame-9">
            <div className="frame-8">
              <h3>Service Perangkat</h3>
              <p>
                Servis Perangkat Teknologi adalah layanan yang menyediakan
                dukungan teknis dan teknis perangkat teknologi. Kami akan
                memberikan solusi yang efektif untuk masalah teknis perangkat
                Anda dan membantu Anda meningkatkan produktivitas. Kami akan
                melakukan troubleshooting dan menerapkan pembaruan pada
                perangkat Anda dengan tujuan memastikan bahwa ia tetap berfungsi
                dengan baik dan aman. Layanan kami juga mencakup pemeriksaan
                reguler untuk memastikan operasional perangkat Anda selalu
                optimal.
              </p>
            </div>
            <div className="frame-7">
              <li className="mc">Murah dan Cepat</li>
              <li className="at">Aman dan Terpercaya</li>
              <li className="kb">Kondisi Barang Bagus</li>
            </div>
          </div>
        </div>
        <div className="feat-3">
          <div className="frame-12">
            <div className="frame-11">
              <h3>Pembuatan Aplikasi</h3>
              <p>
                Kami menawarkan layanan pembuatan aplikasi yang hemat biaya dan
                efisien. Kami akan bekerja sama dengan Anda untuk menentukan
                kebutuhan dan tujuan aplikasi, lalu merancang dan membangun
                solusinya. Aplikasi kami akan disesuaikan dengan platform dan
                infrastruktur yang tersedia. Tim kreatif profesional kami akan
                memastikan aplikasi kami mudah digunakan dan memenuhi standar
                kualitas.
              </p>
              <div className="frame-10">
                <li className="mc">Murah dan Cepat</li>
                <li className="at">Aman dan Terpercaya</li>
                <li className="kb">Kondisi Barang Bagus</li>
              </div>
            </div>
          </div>
          <div className="img-3">
            <img src={feat3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
